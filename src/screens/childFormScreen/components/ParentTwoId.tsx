import { View } from 'react-native'
import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InfoParent from './InfoParent'
import SubTitles from '../../../sharedUI/layout/SubTitles'
import { globalStyles } from '../../../utils/globalStyles'
import { getParentTwo } from '../../../store/childState/identityAccompagnant'
import { RootState } from '../../../store/store'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

const ParentTwoId: FC = () => {

  const {responsablesParents, parentTwoOuiNon, parentTwo} = useSelector((state: RootState) => state.identityAccompagnant)

  const dispatch = useDispatch()

  return (
    <View>
      <SubTitles title={`${responsablesParents !== undefined && responsablesParents === true ? "PARENT 2 ": "RESPONSABLE LÉGAL 2"}`} />
      <View style={[globalStyles.flexRow, {alignItems: 'flex-start'}]}>
        <View>    
          <BouncyCheckbox
            text="Cochez cette case si vous n'êtes pas en mesure de fournir les informations du second parent"
            size={35}
            style={{}}
            fillColor="green"
            unfillColor="#FFFFFF"
            iconStyle={{ borderColor: "red" }}
            innerIconStyle={{ borderWidth: 2 }}
            textStyle={{
              fontFamily: "JosefinSans-Regular", 
              width:"82.5%", 
              textDecorationLine: "none", 
              color: `${parentTwo === "Je ne suis pas en mesure de donner les informations relatives au second parent de l'enfant." ? "green": "black"}`
            }}
            onPress={(isChecked: boolean) => {
              if(isChecked){
                dispatch(getParentTwo("Je ne suis pas en mesure de donner les informations relatives au second parent de l'enfant."))
          
              } else {
                dispatch(getParentTwo(
                  {
                    nom: undefined, //
                    prenom: undefined, //
                    tel: undefined, //
                    emailOuiNon: undefined,
                    email:"" ,
                    profession: undefined, //
                  }
                ))
              }
            }}
          />
        </View>
        
      </View>
        {
          parentTwoOuiNon == true && typeof(parentTwo) !== 'string' && parentTwo !== null && parentTwo !== undefined &&
          <InfoParent whichParent={parentTwo} reducerFromStore={getParentTwo} parentTwo={true} />
        }
    </View>
  )
}

export default ParentTwoId
