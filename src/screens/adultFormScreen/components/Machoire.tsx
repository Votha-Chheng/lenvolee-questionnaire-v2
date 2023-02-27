import { View } from 'react-native'
import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { getCraquementClaquementDouleurOuvertureMachoire, getDifficulteAvalerMacherCoteUnique, getSerrementGrincementDents } from '../../../store/adultState/machoire'
import { globalStyles } from '../../../utils/globalStyles'
import SubTitles from '../../../sharedUI/layout/SubTitles'
import Label from '../../../sharedUI/form/Label'
import RadioComponent from '../../../sharedUI/form/RadioComponent'

const Machoire: FC = () => {
  const {serrementGrincementDents, craquementClaquementDouleurOuvertureMachoire, difficulteAvalerMacherCoteUnique} = useSelector((state: RootState) => state.machoireInfo)

  const dispatch = useDispatch()

  return (
    <View style={globalStyles.container} >
      <SubTitles title="MÂCHOIRE" />
      <View>
        <Label
          question="Serrez-vous ou grincez-vous des dents ?"
          statement={serrementGrincementDents}
        />
        <RadioComponent
          valueState ={serrementGrincementDents}
          setValueToTrue={()=>dispatch(getSerrementGrincementDents(true))}
          setValueToFalse={()=>dispatch(getSerrementGrincementDents(false))}
        />
      </View>

      <View>
        <Label
          question="Avez-vous remarqué des craquements, des claquements ou une douleur à l’ouverture de la mâchoire ?"
          statement={craquementClaquementDouleurOuvertureMachoire}
        />
        <RadioComponent
          valueState ={craquementClaquementDouleurOuvertureMachoire}
          setValueToTrue={()=>dispatch(getCraquementClaquementDouleurOuvertureMachoire(true))}
          setValueToFalse={()=>dispatch(getCraquementClaquementDouleurOuvertureMachoire(false))}
        />
      </View>
      
      <View>
        <Label
          question="Avez-vous des difficultés à avaler, à mâcher ou ne mâchez-vous fréquemment que d’un seul côté ?"
          statement={difficulteAvalerMacherCoteUnique}
        />
        <RadioComponent
          valueState ={difficulteAvalerMacherCoteUnique}
          setValueToTrue={()=>dispatch(getDifficulteAvalerMacherCoteUnique(true))}
          setValueToFalse={()=>dispatch(getDifficulteAvalerMacherCoteUnique(false))}
        />
      </View>
    </View>
  )
}

export default Machoire
