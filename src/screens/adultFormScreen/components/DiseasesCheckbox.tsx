import { FC } from 'react';
import { View, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import CheckBoxComponent from '../../../sharedUI/form/CheckboxComponent';
import ComponentAutres from '../../../sharedUI/form/ComponentAutres';
import Label from '../../../sharedUI/form/Label';
import { getMaladies } from '../../../store/adultState/medicalInfo';
import { RootState } from '../../../store/store';
import { globalStyles } from '../../../utils/globalStyles';

const DiseasesCheckboxes:FC = () => {

  const {maladies} = useSelector((state: RootState)=> state.medicalHistory)

  const dispatch = useDispatch()
  const { width } = useWindowDimensions()

  const handleChangeValues = (isChecked: boolean, disease: string)=>{
    if(isChecked){
      const newArrayMaladies = [...maladies, disease] 
      dispatch(getMaladies(newArrayMaladies))

    } else if(!isChecked){
      let temp = maladies.filter((item: string) => item !== disease)
      dispatch(getMaladies(temp))

    }
  }
  
  return (
    <SafeAreaView style={{marginLeft:10}}>
      <Label
        question="Merci de cocher chacune des maladies ou problèmes que vous avez pu avoir par le passé ou que vous avez actuellement (ne rien cocher si vous n'avez rien eu)"
        statement={maladies}
      />
      <View style={[globalStyles.flexRow, {marginBottom:0}]}>
        <View style={{marginRight:15}}>
          <CheckBoxComponent title="Antidépresseurs" maladies={maladies} handleChangeValues={handleChangeValues} dispatcher={dispatch} reducerFromStore={getMaladies}/>
          <CheckBoxComponent title="Maladie du foie" maladies={maladies} handleChangeValues={handleChangeValues}  dispatcher={dispatch} reducerFromStore={getMaladies}/>
          <CheckBoxComponent title="Prothèses non-dentaires" maladies={maladies} handleChangeValues={handleChangeValues} dispatcher={dispatch} reducerFromStore={getMaladies}/>
          <CheckBoxComponent title="Asthme" maladies={maladies} handleChangeValues={handleChangeValues}  dispatcher={dispatch} reducerFromStore={getMaladies}/>
          <CheckBoxComponent title="Maladie cardiaque" maladies={maladies} handleChangeValues={handleChangeValues} dispatcher={dispatch} reducerFromStore={getMaladies}/>
          <CheckBoxComponent title="Rhumatisme aigu" maladies={maladies} handleChangeValues={handleChangeValues} dispatcher={dispatch} reducerFromStore={getMaladies}/>
          <CheckBoxComponent title="Chirurgie esthétique" maladies={maladies} handleChangeValues={handleChangeValues} dispatcher={dispatch} reducerFromStore={getMaladies}/>
          <CheckBoxComponent title="Maladie du sang" maladies={maladies} handleChangeValues={handleChangeValues} dispatcher={dispatch} reducerFromStore={getMaladies}/>
          <CheckBoxComponent title="Thyroïde" maladies={maladies} handleChangeValues={handleChangeValues} dispatcher={dispatch} reducerFromStore={getMaladies}/>
          <CheckBoxComponent title="Diabète" maladies={maladies} handleChangeValues={handleChangeValues} dispatcher={dispatch} reducerFromStore={getMaladies}/>
          <CheckBoxComponent title="Hépatite" maladies={maladies} handleChangeValues={handleChangeValues} dispatcher={dispatch} reducerFromStore={getMaladies}/>
          <CheckBoxComponent title="Pertes de connaissance" maladies={maladies} handleChangeValues={handleChangeValues} dispatcher={dispatch} reducerFromStore={getMaladies}/>
          <CheckBoxComponent title="Troubles des reins" maladies={maladies} handleChangeValues={handleChangeValues} dispatcher={dispatch} reducerFromStore={getMaladies}/>
        </View>
        <View style={{marginLeft:`${width>500? 15: 0} `}}>
          <CheckBoxComponent title="Lésions cardiaques congénitales " maladies={maladies} handleChangeValues={handleChangeValues} dispatcher={dispatch} reducerFromStore={getMaladies}/> 
          <CheckBoxComponent title="Problèmes circulatoires" maladies={maladies} handleChangeValues={handleChangeValues} dispatcher={dispatch} reducerFromStore={getMaladies}/>
          <CheckBoxComponent title="Tumeur maligne" handleChangeValues={handleChangeValues} maladies={maladies}  dispatcher={dispatch} reducerFromStore={getMaladies}/>
          <CheckBoxComponent title="HIV" maladies={maladies} handleChangeValues={handleChangeValues}  dispatcher={dispatch} reducerFromStore={getMaladies}/>
          <CheckBoxComponent title="Désordres hormonaux" maladies={maladies} handleChangeValues={handleChangeValues}  dispatcher={dispatch} reducerFromStore={getMaladies}/>
          <CheckBoxComponent title="Maladies vénériennes " maladies={maladies} handleChangeValues={handleChangeValues}  dispatcher={dispatch} reducerFromStore={getMaladies}/>
          <CheckBoxComponent title="Sinusites répétées" maladies={maladies} handleChangeValues={handleChangeValues}  dispatcher={dispatch} reducerFromStore={getMaladies}/>
          <CheckBoxComponent title="Œdèmes (gonflements) " maladies={maladies} handleChangeValues={handleChangeValues}  dispatcher={dispatch} reducerFromStore={getMaladies}/>
          <CheckBoxComponent title="Syncopes, vertiges" maladies={maladies} handleChangeValues={handleChangeValues}  dispatcher={dispatch} reducerFromStore={getMaladies}/>
          <CheckBoxComponent title="Glaucome" maladies={maladies} handleChangeValues={handleChangeValues}  dispatcher={dispatch} reducerFromStore={getMaladies}/>
          <CheckBoxComponent title="Pacemaker" maladies={maladies} handleChangeValues={handleChangeValues}  dispatcher={dispatch} reducerFromStore={getMaladies}/>
          <CheckBoxComponent title="Ulcères à l’estomac" maladies={maladies} handleChangeValues={handleChangeValues}  dispatcher={dispatch} reducerFromStore={getMaladies}/>
          <CheckBoxComponent title="Problèmes nerveux " maladies={maladies} handleChangeValues={handleChangeValues}  dispatcher={dispatch} reducerFromStore={getMaladies}/>
        </View>
      </View>
      <ComponentAutres stateArray={maladies} reducerFromStore={getMaladies} extraItem="Autre(s) maladie(s) que vous tenez à nous signaler" placeHolder="Maladie" obligatoire={false} />
    </SafeAreaView>
  );
};


export default DiseasesCheckboxes;
