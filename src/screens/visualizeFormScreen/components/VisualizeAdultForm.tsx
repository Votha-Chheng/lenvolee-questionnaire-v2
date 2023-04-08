import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { FC } from 'react'
import { globalStyles } from '../../../utils/globalStyles'
import Logo from '../../../sharedUI/layout/Logo'
import { displayDateNormal } from '../../../utils/displayDateDMA'
import { returnOuiNon } from '../../../utils/returnOuiNon'
import SubTitles from '../../../sharedUI/layout/SubTitles'

type VisualizeAdultFormProps = {
  fiche: any
}

const VisualizeAdultForm: FC<VisualizeAdultFormProps> = ({fiche}) => {
  return (
    <ScrollView style={[{width:"100%", height:"100%", marginBottom:20}, globalStyles.container]}>
      <View style={{height:175}}>
        <Logo/>
        <Text style={globalStyles.titleStyle}>Dr Sylvie MA-FRANCIN</Text>
      </View>
      <Text style={{textAlign:"center", marginVertical:10, fontFamily:"Rubik-Bold", fontSize:17.5, color:"black", textDecorationLine:"underline"}}>Fiche renseignement adulte</Text>
      <View style={[globalStyles.flexRow, {marginBottom:0, marginTop:5, justifyContent:"flex-end"}]}>
        <Text style={globalStyles.key}>Date du RDV : </Text>
        <Text style={globalStyles.value}>{displayDateNormal(new Date(fiche.dateRdv).toDateString())}</Text>
      </View>

      <View style={{marginVertical:15, borderTopColor:"black", borderTopWidth:2.5, paddingTop:10}}>
        <Text style={globalStyles.key}>&#8227; Patient : 
          <Text style={globalStyles.key}> {fiche.genre === "Madame" ? "Mme":"M."} {fiche.nom.toUpperCase()} {fiche.prenom}</Text>
        </Text>
        <Text style={globalStyles.key}>&#8227; Date de naissance : 
          <Text style={globalStyles.value}> {displayDateNormal(new Date(fiche.dateDeNaissance).toDateString())}</Text> 
        </Text>
        <Text style={globalStyles.key}>&#8227; Profession : 
          <Text style={globalStyles.value}> {fiche.profession}</Text>
        </Text>
        <Text style={globalStyles.key}>&#8227; Téléphone : 
          <Text style={globalStyles.value}> {fiche.tel}</Text>
        </Text>
        <Text style={globalStyles.key}>&#8227; E-mail : 
          <Text style={globalStyles.value}> {fiche.email ?? "Pas d'e-mail"}</Text>
        </Text>
        <Text style={globalStyles.key}>&#8227; Adresse : 
          <Text style={globalStyles.value}> {fiche.adresse}</Text>
        </Text>
        <Text style={globalStyles.key}>&#8227; Ville : 
          <Text style={globalStyles.value}> {fiche.codePostal} {fiche.ville}</Text>
        </Text>
      </View>

      <View style={{ marginBottom:10}}>
        <Text style={globalStyles.titleStyle}>HISTORIQUE MEDICAL</Text>
      </View>

      <View style={{marginVertical:15}}>
        <Text style={globalStyles.key}>&#8227; Médecin traitant : 
          <Text style={globalStyles.value}> Dr. {fiche.medecinTraitant}</Text>
        </Text>
        <Text style={globalStyles.key}>&#8227; Date du dernier examen médical : 
          <Text style={globalStyles.value}> {displayDateNormal(new Date(fiche.dateDernierExamen).toDateString())}</Text>
        </Text>
        <Text style={globalStyles.key}>&#8227; Avez-vous connu des changements dans votre état de santé depuis un an ? 
          <Text style={[globalStyles.value, {color:`${fiche.changementEtatSante ?'red':'black'}`}]}> {returnOuiNon(fiche.changementEtatSante)}</Text>
        </Text>
        <Text style={globalStyles.key}>&#8227; Problèmes connus par le passé : 
          <Text style={[globalStyles.value, {color:`${fiche.maladies.length>0 ?'red':'black'}`}]}> {fiche.maladies.length>0 ? fiche.maladies.join(", ") : "Aucun"}</Text>
        </Text>
        <Text style={globalStyles.key}>&#8227; Avez-vous déjà eu un saignement anormal au cours d’une intervention ou d’un accident ?
          <Text style={[globalStyles.value, {color:`${fiche.saignementInterventionAccident ?'red':'black'}`}]}> {returnOuiNon(fiche.saignementInterventionAccident)}</Text>
        </Text>
        <Text style={globalStyles.key}>&#8227; Avez-vous subi un traitement par radiations ?
          <Text style={[globalStyles.value, {color:`${fiche.saignementInterventionAccident ?'red':'black'}`}]}> {returnOuiNon(fiche.saignementInterventionAccident)}</Text>
        </Text>
        <Text style={globalStyles.key}>&#8227; Prise de médicaments actuellement ?
          <Text style={[globalStyles.value, {color:`${fiche.priseMedicamentActuelle ?'red':'black'}`}]}> {returnOuiNon(fiche.priseMedicamentActuelle)}</Text>
        </Text>
        {
          fiche.priseMedicamentActuelle && 
          <Text style={globalStyles.key}>&#8227; Medicament(s) :
            <Text style={[globalStyles.value, {color:'red'}]}> {fiche.medicamentsActuels.join(", ")}</Text>
          </Text>
        }
        <Text style={globalStyles.key}>&#8227; Allergies ?
          <Text style={[globalStyles.value, {color:`${fiche.allergies ?'red':'black'}`}]}> {returnOuiNon(fiche.allergies)}</Text>
        </Text>
        {
          fiche.allergies && 
          <Text style={globalStyles.key}>&#8227; Liste des allergies :
            <Text style={[globalStyles.value, {color:'red'}]}> {fiche.allergiesListe.join(", ")}</Text>
          </Text>
        }
        <Text style={globalStyles.key}>&#8227; Fumeur : 
          <Text style={[globalStyles.value, {color:`${fiche.fumeur ?'red':'black'}`}]}> {returnOuiNon(fiche.fumeur)}</Text>
        </Text>
        {
          fiche.fumeur && 
          <Text style={globalStyles.key}>&#8227; Rythme :
            <Text style={[globalStyles.value, {color:'red'}]}> {fiche.cigarettesParJour} cig/jour</Text>
          </Text>
        }
        {
          fiche.genre === "Madame" && 
          <Text style={globalStyles.key}>&#8227; Enceinte ?
            <Text style={[globalStyles.value, {color:`${fiche.enceinte ?'red':'black'}`}]}> {returnOuiNon(fiche.enceinte)} cig/jour</Text>
          </Text>
        }
        {
          (fiche.enceinte && fiche.genre === "Madame") &&
          <Text style={globalStyles.key}>&#8227; Enceinte de : 
            <Text style={[globalStyles.value, {color:'red'}]}> {fiche.moisDeGrossesse} mois</Text>
          </Text>
        }
        {
          (fiche.enceinte === false && fiche.genre === "Madame") &&
          <Text style={globalStyles.key}>&#8227; Prise de la pilule ?
            <Text style={[globalStyles.value, {color:`${fiche.pilule ?'red':'black'}`}]}> {returnOuiNon(fiche.pilule)}</Text> 
          </Text>
        }
        <Text style={globalStyles.key}>&#8227; Traitement contre l'ostéoporose ? 
          <Text style={[globalStyles.value, {color:`${fiche.osteoporose ?'red':'black'}`}]}> {returnOuiNon(fiche.osteoporose)}</Text>
        </Text>
        {
          fiche.osteoporose &&
          <Text style={globalStyles.key}>&#8227; Médicaments contre l'ostéoporose :
            <Text style={[globalStyles.value, {color:'red'}]}> {fiche.medicOsteoporose.join(", ")}</Text> 
          </Text>
        }
      </View>

      <View>
        <Text style={globalStyles.titleStyle}>HISTORIQUE DENTAIRE</Text>
      </View>

      
      <View style={{marginVertical: 15}}>
        <Text style={globalStyles.key}>&#8227; Date du dernier examen dentaire : 
          <Text style={globalStyles.value}> {displayDateNormal(new Date(fiche.dateDernierExamDentaire).toDateString())}</Text>
        </Text>
        <Text style={globalStyles.key}>&#8227; Motif de consultation aujourd'hui  : 
          <Text style={globalStyles.value}> {fiche.motifConsultation}</Text>
        </Text>
        {
          fiche.difficulteDentiste
        ?
          <Text style={globalStyles.key}>&#8227; J'ai rencontré des difficultés particulières lors de précédentes consultations chez le dentiste tels que : 
            <Text style={globalStyles.value}> {fiche.listeDifficulteDentiste.join(", ")}</Text>
          </Text>
          :
          <Text style={globalStyles.key}> &#8227; Je n'ai pas eu de difficulté particulière lors de précédentes consultations chez le dentiste.</Text>
        }
      </View>
      
      <View style={{marginVertical:15}}>
        <SubTitles title="GENCIVES" />
        <Text style={globalStyles.key}>&#8227; Avez-vous remarqué que vos dents se sont écartées depuis quelque temps ?
          <Text style={[globalStyles.value, {color:`${fiche.dentsEcartes ?'red':'black'}`}]}> {returnOuiNon(fiche.dentsEcartes)}</Text> 
        </Text>
        <Text style={globalStyles.key}>&#8227; Saignement des gencives ? 
          <Text style={[globalStyles.value, {color:`${fiche.saignementGencives ?'red':'black'}`}]}> {returnOuiNon(fiche.saignementGencives)}</Text>
        </Text>
        <Text style={globalStyles.key}>&#8227; Traitement des gencives auparavant ? 
          <Text style={[globalStyles.value, {color:`${fiche.saignementGencives ?'red':'black'}`}]}> {returnOuiNon(fiche.traitementGencive)}</Text>
        </Text>
        {
          fiche.traitementGencive &&
          <Text style={globalStyles.key}>&#8227; Traitements des gencives par : 
            <Text style={[globalStyles.value, {color:'red'}]}> {fiche.traitementGencivesPar.join(", ")}</Text>
          </Text>
        }

      </View>
      <View style={{marginVertical:15}}>
        <SubTitles title="DENTS" />
        <Text style={globalStyles.key}>&#8227; Avez-vous des dents extraites ? 
          <Text style={[globalStyles.value, {color:`${fiche.dentsExtraites ?'red':'black'}`}]}> {returnOuiNon(fiche.dentsExtraites)}</Text>
        </Text>
        {
          fiche.dentsExtraites &&
          <Text style={globalStyles.key}>&#8227; Raisons des extractions de dent : 
            <Text style={[globalStyles.value, {color:'red'}]}> {fiche.causesExtraction.join(", ")}</Text>
          </Text>
        }
        {
          fiche.dentsExtraites &&
          <Text style={globalStyles.key}>&#8227; Les dents extraites ont-elles été remplacées ? 
            <Text style={[globalStyles.value, {color:`${fiche.dentsRemplacees ?'red':'black'}`}]}> {returnOuiNon(fiche.dentsRemplacees)}</Text>
          </Text>
        }
        {
          fiche.dentsRemplacees 
          ?
          <Text style={globalStyles.key}>&#8227; Les dents extraites ont-été remplacées par : 
            <Text style={[globalStyles.value, {color:'red'}]}> {fiche.moyenDentRemplacement.join(", ")}</Text>
          </Text>
          :
          <Text style={globalStyles.key}>&#8227; Pour quelles raison n'ont-elle pas été remplacées ? 
            <Text style={globalStyles.value}>{fiche.raisonsNonRemplacementDentsExtraites}</Text>
          </Text>
        }
        {
          fiche.dentsRemplacees 
          ?
          <Text style={globalStyles.key}>&#8227; Comment vous sentez-vous avec vos prothèses actuelles ? 
            <Text style={[globalStyles.value, {color:'red'}]}> {fiche.sensationProthesesActuelles}</Text>
          </Text>
          :
          <Text style={globalStyles.key}>&#8227; Aucune dent remplacée. </Text>
        }
        {
          fiche.utilisationMetaux 
          ?
          <Text style={globalStyles.key}>&#8227; Préférences particulières pour l'utilisation des métaux dans votre bouche :
            <Text style={[globalStyles.value, {color:'red'}]}> {fiche.preferencesUtilisationMetaux}</Text> 
          </Text>
          :
          <Text style={globalStyles.key}>&#8227; Pas de préférences pour l'utilisation de métaux dans la bouche. </Text>

        }
        {
          fiche.dentsSensibles 
          ?
          <Text style={globalStyles.key}>&#8227; Dents sensibles à : 
            <Text style={[globalStyles.value, {color:'red'}]}> {fiche.listeSensibilite.join(", ")}</Text>
          </Text>
          :
          <Text style={globalStyles.key}>&#8227; Aucune sensibilité dentaire connue. </Text>
        }
      </View>

      <View style={{marginVertical:15}}>
        <SubTitles title="MACHOIRES" />
        <Text style={globalStyles.key}>&#8227; Serrez-vous ou grincez-vous des dents ? 
          <Text style={[globalStyles.value, {color:`${fiche.serrementGrincementDents ?'red':'black'}`}]}> {returnOuiNon(fiche.serrementGrincementDents)}</Text>
        </Text>
        <Text style={globalStyles.key}>&#8227; Craquements, claquements ou douleur à l’ouverture de la mâchoire ? 
          <Text style={[globalStyles.value, {color:`${fiche.craquementClaquementDouleurOuvertureMachoire ?'red':'black'}`}]}> {returnOuiNon(fiche.craquementClaquementDouleurOuvertureMachoire)}</Text>
        </Text>
        <Text style={globalStyles.key}>&#8227; Difficultés à avaler, à mâcher ou ne mâchez seulement d’un côté ? 
          <Text style={[globalStyles.value, {color:`${fiche.difficulteAvalerMacherCoteUnique ?'red':'black'}`}]}> {returnOuiNon(fiche.difficulteAvalerMacherCoteUnique)}</Text>
        </Text>
      </View>

      <View style={{marginVertical:15}}>
        <SubTitles title="HYGIÈNE DENTAIRE" />
        <Text style={globalStyles.key}>&#8227; Types de brosse à dent utilisé: 
        {
          fiche.typeBrosseADent !== undefined
          ?
          <Text style={[globalStyles.value, {color:'red'}]}> {fiche.typeBrosseADent.join(", ")}</Text>
          :
          <Text style={globalStyles.key}>&#8227; Pas de réponse.</Text>
        }
        </Text>  
        <Text style={globalStyles.key}>&#8227; Quand vous brossez-vous les dents ? 
        {
          fiche.momentsBrossageDents !== undefined
          ?
          <Text style={[globalStyles.value, {color:'red'}]}> {fiche.momentsBrossageDents.join(", ")}</Text>
          :
          <Text style={globalStyles.key}>&#8227; Pas de réponse.</Text>
        } 
        </Text> 
        <Text style={globalStyles.key}>&#8227; A quel rythme changez-vous de brosse à dents ? 
          <Text style={[globalStyles.value]}> {fiche.rythmeChangementBrosseAdent}</Text>
        </Text>
        <Text style={globalStyles.key}>&#8227; Utilisation du fil de soie dentaire ou de brossettes inter-dentaires ? 
          <Text style={[globalStyles.value, {color:`${fiche.utilisationFilDentaireBrossette ?'red':'black'}`}]}> {returnOuiNon(fiche.utilisationFilDentaireBrossette)}</Text>
        </Text>
      </View>

      <View style={{marginVertical:15}}>
        <SubTitles title="HABITUDES" />
        {
            fiche.habitudes.length>0
            ?
            <Text style={globalStyles.key}>&#8227; J'ai les habitudes suivantes :
              <Text style={[globalStyles.value, {color:'red'}]}> {fiche.habitudes.join(", ")}</Text> 
            </Text>
            :
            <Text style={globalStyles.key}>&#8227; Aucune habitudes de mâchouillage. </Text>

        }
        <Text style={globalStyles.key}>&#8227; Avez-vous l’impression d’avoir une mauvaise haleine ou un mauvais goût dans la bouche ? 
          <Text style={[globalStyles.value, {color:`${fiche.mauvaiseHaleine ?'red':'black'}`}]}> {returnOuiNon(fiche.mauvaiseHaleine)}</Text>
        </Text>
      </View>

      <View style={{marginVertical:15}}>
        <SubTitles title="DENTISTERIE ESTHÉTIQUE" />
        <Text style={globalStyles.key}>&#8227; Dans un large sourire, vos dents sont-elles toutes de la même couleur ? 
          <Text style={[globalStyles.value, {color:`${fiche.dentsMemeCouleurs ?'red':'black'}`}]}> {returnOuiNon(fiche.dentsMemeCouleurs)}</Text>
        </Text>
        <Text style={globalStyles.key}>&#8227; Aimeriez-vous avoir des dents plus blanches ? 
          <Text style={[globalStyles.value, {color:`${fiche.souhaitDentsPlusBlanches ?'red':'black'}`}]}>{returnOuiNon(fiche.souhaitDentsPlusBlanches)}</Text>
        </Text>
        <Text style={globalStyles.key}>&#8227; Êtes-vous satisfait(e) de l’apparence de vos dents et de vos gencives ? 
          <Text style={[globalStyles.value, {color:`${fiche.satisfactionDentsGencives ?'red':'black'}`}]}>{returnOuiNon(fiche.satisfactionDentsGencives)}</Text>
        </Text>
        <Text style={globalStyles.key}>&#8227; Mettez-vous la main devant la bouche lorsque vous riez ou souriez ? 
          <Text style={[globalStyles.value, {color:`${fiche.mainDevantBoucheSourire ?'red':'black'}`}]}> {returnOuiNon(fiche.mainDevantBoucheSourire)}</Text>
        </Text>
        <Text style={globalStyles.key}>&#8227; Si vous aviez la possibilité, souhaiteriez-vous changer votre sourire ? 
          <Text style={[globalStyles.value, {color:`${fiche.souhaitsChangementOuiNon ?'red':'black'}`}]}> {returnOuiNon(fiche.souhaitsChangementOuiNon)}</Text>
        </Text>
        {
          fiche.souhaitsChangementOuiNon &&
          <Text style={globalStyles.key}>&#8227; Qu’aimeriez-vous changer ? 
            <Text style={[globalStyles.value, {color:"red"}]}> {fiche.souhaitsChangement}</Text>
          </Text>
        }
      </View>

      <View style={ {marginVertical:15}}>
        <SubTitles title="DIVERS" />
        <Text style={globalStyles.key}>&#8227; Avez-vous porté un appareil ou des bagues pour redresser vos dents ? 
          <Text style={[globalStyles.value, {color:`${fiche.appareilDentaireUneFois ?'red':'black'}`}]}> {returnOuiNon(fiche.appareilDentaireUneFois)}</Text>
        </Text>
        <Text style={globalStyles.key}>&#8227; Êtes-vous préoccupé(e) par vos dents ? 
          <Text style={[globalStyles.value, {color:`${fiche.preoccupationDentsOuiNon ?'red':'black'}`}]}> {returnOuiNon(fiche.preoccupationDentsOuiNon)}</Text>
        </Text>
        {
          fiche.preoccupationDentsOuiNon &&
          <Text style={globalStyles.key}>&#8227; Quelles sont ces préoccupations ? ? 
            <Text style={[globalStyles.value, {color:"red"}]}>{fiche.preoccupationDents}</Text>
          </Text>
        }
        <Text style={globalStyles.key}>&#8227; Aimeriez-vous modifier l’apparence de vos dents ou de vos gencives ? 
          <Text style={[globalStyles.value, {color:`${fiche.modifierDentsOuiNon ?'red':'black'}`}]}> {returnOuiNon(fiche.modifierDentsOuiNon)}</Text>
        </Text>
        {
          fiche.modifierDentsOuiNon &&
          <Text style={globalStyles.key}>&#8227; Qu'aimeriez-vous modifier ? 
            <Text style={[globalStyles.value, {color:"red"}]}>{fiche.modifierDents}</Text>
          </Text>
        }
        <Text style={globalStyles.key}>&#8227; Êtes-vous anxieux à l’idée de réaliser des soins dentaires ? 
          <Text style={[globalStyles.value, {color:"red"}]}> {fiche.anxieuxSoinsDentaires}</Text>
        </Text>
        <Text style={globalStyles.key}>&#8227; Comment avez-vous connu le cabinet ?
          <Text style={[globalStyles.value, {color:"red"}]}> {fiche.commentConnaissezVousLeCabinet}</Text> 
        </Text>
        {
          fiche.autresRemarquesUtilesOuiNon===true ?
          <Text style={[globalStyles.key, {color:"red"}]}>&#8227; Autres remarques utiles : <Text style={[globalStyles.value, , {color:"red"}]}> {fiche.autresRemarquesUtiles}</Text></Text>
          :
          <Text style={globalStyles.key}>&#8227; Pas d'autres remarques</Text>
        }
      </View>
    </ScrollView>
  )
}

export default VisualizeAdultForm

