import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { globalStyles } from '../../../utils/globalStyles'
import Logo from '../../../sharedUI/layout/Logo'
import { displayDateNormal } from '../../../utils/displayDateDMA'
import { returnOuiNon } from '../../../utils/returnOuiNon'
import SubTitles from '../../../sharedUI/layout/SubTitles'
import { MedicamentsChild } from '../../../classes/child/MedicamentsChild'
import { MaladieGraveChild } from '../../../classes/child/MaladieGraveChild'
import { OperationChild } from '../../../classes/child/OperationChild'
import { Boisson } from '../../../classes/child/Boisson'
import { DentCasse } from '../../../classes/child/DentCasse'

type VisualizeChildFormProps = {
  fiche: any
}

const VisualizeChildForm: FC<VisualizeChildFormProps> = ({fiche}) => {
  return (
    <ScrollView style={[{width:"100%", height:"100%", marginBottom:20}, globalStyles.container]}>
      <View style={{height:175}}>
        <Logo/>
        <Text style={globalStyles.titleStyle}>Dr Sylvie MA-FRANCIN</Text>
      </View>
      <Text style={{textAlign:"center", marginVertical:10, fontFamily:"Rubik-Bold", fontSize:17.5, color:"black", textDecorationLine:"underline"}}>Fiche renseignement enfant</Text>

      <View style={[globalStyles.flexRow, {marginBottom:0, marginTop:5, justifyContent:"flex-end"}]}>
        <Text style={globalStyles.key}>Date du RDV : <Text style={globalStyles.value}>{displayDateNormal(new Date(fiche.dateRdv).toDateString())}</Text></Text>  
      </View>
      <View style={[globalStyles.flexRow, {marginBottom:0, marginTop:10, paddingTop:10, borderTopColor:"black", borderTopWidth:2.5}]}>
        <Text style={globalStyles.key}>&#8227; Patient : <Text style={globalStyles.key}>{fiche.nom.toUpperCase()} {fiche.prenom}</Text></Text>
      </View>
      <View style={[globalStyles.flexRow, {marginBottom:0}]}>
        <Text style={globalStyles.key}>&#8227; Date de naissance : <Text style={globalStyles.value}>{displayDateNormal(new Date(fiche.dateDeNaissance).toDateString())}</Text> </Text>  
      </View>
      {
        fiche.telEnfant &&
        <Text style={globalStyles.key}>&#8227; Téléphone de l'enfant : <Text style={globalStyles.value}>{fiche.telEnfant}</Text> </Text> 
      }
      <Text style={globalStyles.key}>&#8227; Adresse : <Text style={globalStyles.value}>{fiche.adresse} {fiche.codePostal}</Text></Text> 
      <Text style={globalStyles.key}>&#8227; Ville : <Text style={globalStyles.value}>{fiche.codePostal} {fiche.ville}</Text></Text> 
      <Text style={globalStyles.key}>&#8227; Niveau scolaire : <Text style={globalStyles.value}>{fiche.niveauScolaire}</Text></Text> 
      {
        fiche.hobbies.length>0 
        ? <Text style={globalStyles.key}>&#8227; Loisirs & hobbies : <Text style={globalStyles.value}>{fiche.hobbies.join(", ")}</Text></Text> 
        : <Text style={globalStyles.key}>&#8227; Loisirs & hobbies : <Text style={globalStyles.value}>Pas de réponse.</Text></Text> 
      }
      <View style={{marginBottom:20}}>
        <Text style={globalStyles.key}>&#8227; Frères et soeurs ? <Text style={globalStyles.value}>{returnOuiNon(fiche.fratrie)}</Text></Text> 
        {
          fiche.fratrie &&
          <Text style={globalStyles.key}>&#8227; Place dans la fratrie : <Text style={globalStyles.value}>{fiche.place}</Text></Text> 
        }
      </View>

      <View>
        <Text style={globalStyles.titleStyle}>IDENTITE DES RESPONSABLES LEGAUX</Text>
      </View>
      {
        fiche.responsablesParents === false &&
        <Text style={[globalStyles.key, {color:"red"}]}>&#8227; Les responsables légaux ne sont pas les parents de l'enfants.</Text>
      }
      <SubTitles title={fiche.responsablesParents === false ? "Responsable légal 1": "Parent 1"} />
      <Text style={globalStyles.key}>&#8227; Identité : <Text style={globalStyles.key}>{fiche.parentOne.nom.toUpperCase()} {fiche.parentOne.prenom}</Text></Text>
      <Text style={globalStyles.key}>&#8227; Tél. : <Text style={globalStyles.value}>{fiche.parentOne.tel}</Text></Text>
      <Text style={globalStyles.key}>&#8227; Profession : <Text style={globalStyles.value}>{fiche.parentOne.profession}</Text></Text>
      {
        fiche.parentOne.emailOuiNon
        ?<Text style={globalStyles.key}>&#8227; E-mail : <Text style={globalStyles.value}>{fiche.parentOne.email}</Text></Text>
        :<Text style={globalStyles.key}>&#8227; Pas d'e-mail.</Text>
      }

      {
        fiche.responsablesParents === false && typeof(fiche.parentTwo) !=='string'
        ? <SubTitles title='Responsable légal 2'/>
        : fiche.responsablesParents === true && typeof(fiche.parentTwo) !=='string'
        ? <SubTitles title='Parent 2'/>
        : <Text style={[globalStyles.key, { color:"red" }]}>&#8227; Je suis dans l'incapacité de renseigner les coordonnées du second parent.</Text>
      }
      {
        fiche.parentTwo !== null && typeof(fiche.parentTwo) !== 'string' &&
        <View>
          <Text style={globalStyles.key}>&#8227; Identité : <Text style={globalStyles.key}>{fiche.parentTwo.nom.toUpperCase()} {fiche.parentTwo.prenom}</Text></Text>
          <Text style={globalStyles.key}>&#8227; Tél. : <Text style={globalStyles.value}>{fiche.parentTwo.tel}</Text></Text>
          <Text style={globalStyles.key}>&#8227; Profession : <Text style={globalStyles.value}>{fiche.parentTwo.profession}</Text></Text>
          {
            fiche.parentTwo.emailOuiNon 
            ?<Text style={globalStyles.key}>&#8227; E-mail : <Text style={globalStyles.value}>{fiche.parentTwo.email}</Text></Text>
            :<Text style={globalStyles.key}>&#8227; Pas d'adresse e-mail. </Text>
          }
        </View>    
      }
      <Text style={globalStyles.key}>&#8227; Situation familiale : <Text style={globalStyles.value}>{fiche.situationFamiliale}</Text></Text>

      <SubTitles title='RENSEIGNEMENT SUR LA CONSULTATION'/>
      <Text style={globalStyles.key}>&#8227; Motif de la consultation : <Text style={globalStyles.value}>{fiche.motif}</Text></Text>
      {
        fiche.firstVisitDentiste === true 
        ? <Text style={[globalStyles.key, {color:"red"}]}>&#8227; Première visite chez le dentiste.</Text>
        : <Text style={globalStyles.key}>&#8227; Dernière visite chez le dentiste le : <Text style={globalStyles.value}>{displayDateNormal(fiche.dateDerniereConsultation)}</Text></Text>
      }
      <Text style={globalStyles.key}>&#8227; A-t-il déjà fait des radios dentaires : 
        <Text style={[globalStyles.value, {color:`${fiche.radiosDentaires === true ? "black": "red"}`}]}>{returnOuiNon(fiche.radiosDentaires)}</Text>
      </Text>
      <Text style={globalStyles.key}>&#8227; Première visite dans ce cabinet : <Text style={globalStyles.value}>{returnOuiNon(fiche.firstVisiteCabinet)}</Text></Text>
      <View style={{marginBottom:10}}>
        <Text style={globalStyles.key}>&#8227; Comment connaissez-vous le cabinet ? <Text style={globalStyles.value}>{fiche.commentConnaissezVousLeCabinet}</Text></Text>
      </View>

      <View>
        <Text style={globalStyles.titleStyle}>ETAT DE SANTE GENERAL DE L'ENFANT</Text>
      </View>
      <View style={{marginVertical:15}}>
        <Text style={globalStyles.key}>&#8227; A-t-il des problèmes de santé ? 
          <Text style={[globalStyles.value, {color:`${fiche.problemeSante === false ? "black": "red"}`}]}>{returnOuiNon(fiche.problemeSante)}</Text>
        </Text>
        <Text style={globalStyles.key}>&#8227; Est-il sous surveillance médicale ? 
          <Text style={[globalStyles.value, {color:`${fiche.surveillanceMedicale === false ? "black": "red"}`}]}>{returnOuiNon(fiche.surveillanceMedicale)}</Text>
        </Text>
        {
          fiche.surveillanceMedicale &&
          <Text style={[globalStyles.key, {color:'red'}]}>&#8227; Surveillé(e) {fiche.periodeSurveillanceMedicale} pour {fiche.raisonSurveillanceMedicale} </Text>
        }
        <Text style={globalStyles.key}>&#8227; Prise de médicaments actuelle : 
          <Text style={[globalStyles.value, {color:`${fiche.priseMedicamentsChild === false ? "black": "red"}`}]}>{returnOuiNon(fiche.priseMedicamentsChild)}</Text>
        </Text>
        <View style={{marginBottom:5}}>
        {
          fiche.priseMedicamentsChild &&
          fiche.listeMedicamentsChild.map((medic:MedicamentsChild)=> (
            <Text style={[globalStyles.key, {color:'red', paddingLeft:15}]}>&rarr; Surveillé(e) {medic.nomMedicament} tous/toutes les {medic.frequence} </Text>
          ))
        }
        </View>
        <Text style={globalStyles.key}>&#8227; Allergies médicamenteuses : 
          <Text style={[globalStyles.value, {color:`${fiche.allergiesMedicamentsOuiNon === false ? "black": "red"}`}]}>{returnOuiNon(fiche.allergiesMedicamentsOuiNon)}</Text>
        </Text>
        {
          (fiche.allergiesMedicamentsOuiNon === true && fiche.listeAllergiesMedicaments !== undefined) &&
          <Text style={[globalStyles.key, {color:'red'}]}>&#8227; Allergies à ces médicaments : <Text style={globalStyles.value}>{fiche.listeAllergiesMedicaments.join(", ")}</Text></Text>
        }
        <Text style={globalStyles.key}>&#8227; A-t-il souffert d'une ou de maladies graves auparavant : 
          <Text style={[globalStyles.value, {color:`${fiche.maladieGraveOuiNon === false ? "black": "red"}`}]}>{returnOuiNon(fiche.maladieGraveOuiNon)}</Text>
        </Text>
        <View style={{marginBottom:5}}>
        {
          fiche.maladieGraveOuiNon &&
          fiche.listeMaladiesGraves.map((maladie: MaladieGraveChild)=> (
            <Text style={[globalStyles.key, {color:'red', paddingLeft:15}]}>&rarr; {maladie.nomMaladie} à l'âge de {maladie.age} an(s). </Text>
          ))
        }
        </View>
        <Text style={globalStyles.key}>&#8227; A-t-il déjà été opéré ?
          <Text style={[globalStyles.value, {color:`${fiche.operationOuiNon === false ? "black": "red"}`}]}>{returnOuiNon(fiche.operationOuiNon)}</Text>
        </Text>
        <View style={{marginBottom:5}}>
        {
          fiche.operationOuiNon &&
          fiche.listeOperations.map((maladie: OperationChild)=> (
            <Text style={[globalStyles.key, {color:'red', paddingLeft:15}]}>&rarr; {maladie.cause} à l'âge de {maladie.age} an(s). </Text>
          ))
        }
        </View>
        <Text style={globalStyles.key}>&#8227; Autres antécédents médicaux :
          <Text style={[globalStyles.value, {color:`${fiche.autresAntecedentsMedicauxOuiNon === false ? "black": "red"}`}]}>{returnOuiNon(fiche.autresAntecedentsMedicauxOuiNon)}</Text>
        </Text>
        {
          fiche.autresAntecedentsMedicauxOuiNon &&
          <Text style={[globalStyles.key, {color:'red'}]}>&#8227; Autres antécédents : {fiche.autresAntecedentsMedicaux}</Text>
        }
      </View>

      <View>
        <Text style={globalStyles.titleStyle}>ETAT DE SANTE BUCCO-DENTAIRE DE L'ENFANT</Text>
      </View>
      <View style={{marginVertical:15}}>
        <Text style={globalStyles.key}>&#8227; Moment(s) du lavage de dents : <Text style={globalStyles.value}>{fiche.momentsBrossageDents.join(", ")}</Text></Text>
        <Text style={globalStyles.key}>&#8227; Brossage des dents tout seul :
          <Text style={[globalStyles.value]}>{returnOuiNon(fiche.brossageSeul)}</Text>
        </Text>
        <Text style={globalStyles.key}>&#8227; Nombre de repas par jour :
          <Text style={[globalStyles.value]}>{fiche.nbRepasParJour.toString()}</Text>
        </Text>
      
        <Text style={globalStyles.key}>&#8227; Sucreries :
          <Text style={[globalStyles.value, {color:`${fiche.sucrerieOuiNon === false ? "black": "red"}`}]}>{returnOuiNon(fiche.sucrerieOuiNon)}</Text>
        </Text>
        {
          fiche.sucrerieOuiNon &&
          <Text style={[globalStyles.key, {color:'red'}]}>&#8227; Fréquence des sucreries : {fiche.frequenceSucrerie}.</Text>
        }
        <Text style={globalStyles.key}>&#8227; Boissons (hors eau) :
          <Text style={[globalStyles.value, {color:`${fiche.sodaOuiNon === false ? "black": "red"}`}]}>{returnOuiNon(fiche.sodaOuiNon)}</Text>
        </Text>
        <View style={{marginBottom:5}}>
        {
          fiche.sodaOuiNon &&
          fiche.sodasListe.map((maladie: Boisson)=> (
            <Text style={[globalStyles.key, {color:'red', paddingLeft:15}]}>&rarr; {maladie.boisson} tous/toutes les {maladie.frequence} </Text>
          ))
        }
        </View>
        <Text style={globalStyles.key}>&#8227; A-t-il déjà eu des caries dans le passé ?
          <Text style={[globalStyles.value, {color:`${fiche.cariesAvant === false ? "black": "red"}`}]}>{returnOuiNon(fiche.cariesAvant)}</Text>
        </Text>
        <Text style={globalStyles.key}>&#8227; Lui a-t-on déjà enlevé une dent ?
          <Text style={[globalStyles.value, {color:`${fiche.dentEnleveOuiNon === false ? "black": "red"}`}]}>{returnOuiNon(fiche.dentEnleveOuiNon)}</Text>
        </Text>
        <Text style={globalStyles.key}>&#8227; Dent(s) cassée(s) :
          <Text style={[globalStyles.value, {color:`${fiche.dentCasseOuiNon === false ? "black": "red"}`}]}>{returnOuiNon(fiche.dentCasseOuiNon)}</Text>
        </Text>
        <View style={{marginBottom:5}}>
        {
          fiche.dentCasseOuiNon &&
          fiche.dentCasse.map((dent:DentCasse)=> (
            <Text style={[globalStyles.key, {color:'red', paddingLeft:15}]}>&rarr; {dent.nomDentCasse} en {dent.comment} </Text>
          ))
        }
        </View>
        <Text style={globalStyles.key}>&#8227; Problème suite à un traitement dentaire :
          <Text style={[globalStyles.value, {color:`${fiche.problemeApresTraitementDentaire === false ? "black": "red"}`}]}>{returnOuiNon(fiche.problemeApresTraitementDentaire)}</Text>
        </Text>
        <Text style={globalStyles.key}>&#8227; Traitement ortho actuel ou par le passé :
          <Text style={[globalStyles.value, {color:`${fiche.traitementOrtho === false ? "black": "red"}`}]}>{returnOuiNon(fiche.traitementOrtho)}</Text>
        </Text>
        {
          fiche.habitudesChild !== undefined && fiche.habitudesChild.length>0 
          ?
          <Text style={globalStyles.key}>&#8227; Mauvaises habitudes :
            <Text style={[globalStyles.value, {color:`${fiche.traitementOrtho === false ? "black": "red"}`}]}>{fiche.habitudesChild.join(", ")}</Text>
          </Text>
          :
          <Text style={globalStyles.key}>&#8227; Pas de mauvaises habitudes (pouce, tétine, ongle rongé).</Text>
        }
        <Text style={globalStyles.key}>&#8227; Anesthésie locale subie :
          <Text style={[globalStyles.value, {color:`${fiche.anesthesieLocale === false ? "black": "red"}`}]}>{returnOuiNon(fiche.anesthesieLocale)}</Text>
        </Text>
        <Text style={globalStyles.key}>&#8227; Anesthésie dentaire subie :
          <Text style={[globalStyles.value, {color:`${fiche.anesthesieDentaire === false ? "black": "red"}`}]}>{returnOuiNon(fiche.anesthesieDentaire)}</Text>
        </Text>
        <Text style={globalStyles.key}>&#8227; Séance(s) d'orthophonie :
          <Text style={[globalStyles.value, {color:`${fiche.orthophonie === false ? "black": "red"}`}]}>{returnOuiNon(fiche.orthophonie)}</Text>
        </Text>
        {
          fiche.troubleSommeil !== undefined && fiche.troubleSommeil.length>0 
          ?
          <Text style={globalStyles.key}>&#8227; Trouble(s) du sommeil :
            <Text style={[globalStyles.value, {color:`${fiche.troubleSommeil === false ? "black": "red"}`}]}>{fiche.troubleSommeil.join(", ")}</Text>
          </Text>
          :
          <Text style={globalStyles.key}>&#8227; Pas de troubles du sommeil.</Text>
        }
        {
          fiche.craintesGeneralesOuiNon !== undefined && fiche.craintesGeneralesOuiNon.length>0 
          ?
          <Text style={globalStyles.key}>&#8227; Phobies & craintes :
            <Text style={[globalStyles.value, {color:`${fiche.troubleSommeil === false ? "black": "red"}`}]}>{fiche.listeCraintesGenerales.join(", ")}</Text>
          </Text>
          :
          <Text style={globalStyles.key}>&#8227; Pas de phobies particulières.</Text>
        }
        <Text style={globalStyles.key}>&#8227; Crainte du dentiste :
          <Text style={[globalStyles.value, {color:`${fiche.craintesDentiste === false ? "black": "red"}`}]}>{returnOuiNon(fiche.craintesDentiste)}</Text>
        </Text>
        {
          fiche.remarquesUtilesOuiNon 
          ?
          <Text style={globalStyles.key}>&#8227; Remarques utiles :
            <Text style={[globalStyles.value]}>{fiche.remarquesUtiles}</Text>
          </Text>
          :
          <Text style={globalStyles.key}>&#8227; Pas de remarque à ajouter.</Text>
        }
      </View>
    </ScrollView>
  )
}

export default VisualizeChildForm

const styles = StyleSheet.create({})