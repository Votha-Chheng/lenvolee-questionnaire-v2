import { Linking, ScrollView, StyleSheet, Text } from 'react-native'
import React, { FC } from 'react'

const TermsOfUseScreen: FC = () => {
  return (
    <ScrollView>
      <Text style={styles.bold}>Privacy Policy</Text>
      <Text style={styles.text}>
        Votha Chheng built the Premier RDV - L'Envolée app as a Commercial app. This SERVICE is provided by Votha Chheng and is intended for use as is.

        This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service.

        If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.

        The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at Premier RDV - L'Envolée unless otherwise defined in this Privacy Policy.
      </Text>
      <Text style={styles.bold}>Information Collection and Use</Text>
      <Text style={styles.text}>
        For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information, including but not limited to productivité. The information that I request will be retained on your device and is not collected by me in any way.
        The app does use third-party services that may collect information used to identify you.
        Link to the privacy policy of third-party service providers used by the app : <Text onPress={()=> Linking.openURL("https://policies.google.com/privacy")}>Google Play Services</Text>
      </Text>
      <Text style={styles.bold}>Log Data</Text>
      <Text style={styles.text}>
        I want to inform you that whenever you use my Service, in a case of an error in the app I collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing my Service, the time and date of your use of the Service, and other statistics.
      </Text>
      <Text style={styles.bold}>Cookies</Text>  
      <Text style={styles.text}>
        Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
        This Service does not use these “cookies” explicitly. However, the app may use third-party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
      </Text>
      <Text style={styles.bold}>Service Providers</Text>  
      <Text style={styles.text}>
        I may employ third-party companies and individuals due to the following reasons:

        To facilitate our Service;
        To provide the Service on our behalf;
        To perform Service-related services; or
        To assist us in analyzing how our Service is used.
        I want to inform users of this Service that these third parties have access to their Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
      </Text>
      <Text style={styles.bold}>Security</Text>
      <Text>
        I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security.
      </Text>
      <Text style={styles.bold}>Links to Other Sites</Text>
      <Text style={styles.text}>
        This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
      </Text>
      <Text style={styles.bold}>Children’s Privacy</Text>
      <Text style={styles.text}>
        These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13 years of age. In the case I discover that a child under 13 has provided me with personal information, I immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact me so that I will be able to do the necessary actions.
      </Text>
      <Text style={styles.bold}>Changes to This Privacy Policy</Text>
      <Text style={styles.text}>
        I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page.
        This policy is effective as of 2023-05-18.
      </Text>
      <Text style={styles.bold}>Contact Us</Text>
      <Text style={styles.text}>
        If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at votha.chheng@gmail.com. This privacy policy page was created at privacypolicytemplate.net and modified/generated by App Privacy Policy Generator
      </Text>


      <Text style={styles.text}>
        Dernière mise à jour: June 24, 2023
      </Text>
      <Text style={styles.text}>
        This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You. We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the Privacy Policy Generator.
      </Text>
      <Text style={styles.bold}>Interpretation and Definitions</Text>
      <Text style={styles.bold}>Interpretation</Text>
      <Text style={styles.text}>
        The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
      </Text>
      <Text style={styles.bold}>Interpretation</Text>
      <Text style={styles.text}>
        For the purposes of this Privacy Policy:
      </Text>
      <Text style={styles.text}>
        - Account means a unique account created for You to access our Service or parts of our Service.
      </Text>
      <Text style={styles.text}>
        - Affiliate means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
      </Text>
      <Text style={styles.text}>
        - Application refers to L'Envolée - Questionnaire, the software program provided by the Company.
      </Text>
      <Text style={styles.text}>
        - Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to L'Envolée - Questionnaire.
      </Text>
      <Text style={styles.text}>
        - Country refers to: France
      </Text>
      <Text style={styles.text}>
        - Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.
      </Text>
      <Text style={styles.text}>
        - Personal Data is any information that relates to an identified or identifiable individual.
      </Text>
      <Text style={styles.text}>
        - Service refers to the Application.
      </Text>
      <Text style={styles.text}>
        - Service Provider means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.
      </Text>
      <Text style={styles.text}>
        - Usage Data refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
      </Text>
      <Text style={styles.text}>
        - You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
      </Text>
      <Text style={styles.bold}>Collecting and Using Your Personal Data</Text>
      <Text style={styles.bold}>Types of Data Collected</Text>
      <Text style={styles.bold}>Personal Data</Text>
      <Text style={styles.text}>
        While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
      </Text>
      <Text style={styles.text}>
        - Email address
      </Text>
      <Text style={styles.text}>
        - First name and last name
      </Text>
      <Text style={styles.text}>
        - Phone number
      </Text>
      <Text style={styles.text}>
        - Address, State, Province, ZIP/Postal code, City
      </Text>
      <Text style={styles.text}>
        - Usage Data
      </Text>
      <Text style={styles.bold}>Usage Data</Text>
      <Text style={styles.text}>
        Usage Data is collected automatically when using the Service. Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data. When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data. We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
      </Text>
      <Text style={styles.bold}>Use of Your Personal Data</Text>
      <Text style={styles.text}>
        The Company may use Personal Data for the following purposes:
      </Text>
      <Text style={styles.text}>
        - To provide and maintain our Service, including to monitor the usage of our Service.
      </Text>
      <Text style={styles.text}>
        - To manage Your Account: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.
      </Text>
      <Text style={styles.text}>
        - For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.
      </Text>
      <Text style={styles.text}>
        - To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.
      </Text>
      <Text style={styles.text}>
        - To provide You with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.
      </Text>
      <Text style={styles.text}>
        - To manage Your requests: To attend and manage Your requests to Us.
      </Text>
      <Text style={styles.text}>
        - For business transfers: We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.
      </Text>
      <Text style={styles.text}>
        - For other purposes: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.
      </Text>
      <Text style={styles.text}>
        We may share Your personal information in the following situations:
      </Text>
      <Text style={styles.text}>
        - With Service Providers: We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.
      </Text>
      <Text style={styles.text}>
        - For business transfers: We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.
      </Text>
      <Text style={styles.text}>
        - With Affiliates: We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.
      </Text>
      <Text style={styles.text}>
        - With business partners: We may share Your information with Our business partners to offer You certain products, services or promotions.
      </Text>
      <Text style={styles.text}>
        - With other users: when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.
      </Text>
      <Text style={styles.text}>
        - With Your consent: We may disclose Your personal information for any other purpose with Your consent.
      </Text>
      <Text style={styles.bold}>Retention of Your Personal Data</Text>
      <Text style={styles.text}>
        The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies. The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
      </Text>
      <Text style={styles.bold}>Transfer of Your Personal Data</Text>
      <Text style={styles.text}>
        Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction. Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer. The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.
      </Text>
      <Text style={styles.bold}>Delete Your Personal Data</Text>
      <Text style={styles.text}>
        You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You. Our Service may give You the ability to delete certain information about You from within the Service.You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us. Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.
      </Text>
      <Text style={styles.bold}>Disclosure of Your Personal Data</Text>
      <Text style={styles.bold}>Business Transactions</Text>
      <Text style={styles.text}>
        If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
      </Text>
      <Text style={styles.bold}>Law enforcement</Text>
      <Text style={styles.text}>
        Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
      </Text>
      <Text style={styles.bold}>Other legal requirements</Text>
      <Text style={styles.text}>
        The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
      </Text>
      <Text style={styles.text}>
        - Comply with a legal obligation
      </Text>
      <Text style={styles.text}>
        - Protect and defend the rights or property of the Company
      </Text>
      <Text style={styles.text}>
        - Prevent or investigate possible wrongdoing in connection with the Service
      </Text>
      <Text style={styles.text}>
        - Protect the personal safety of Users of the Service or the public
      </Text>
      <Text style={styles.text}>
        - Protect against legal liability
      </Text>
      <Text style={styles.bold}>Security of Your Personal Data</Text>
      <Text style={styles.text}>
        The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
      </Text>
      <Text style={styles.bold}>Children's Privacy</Text>
      <Text style={styles.text}>
        Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers. If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.
      </Text>
      <Text style={styles.bold}>Links to Other Websites</Text>
      <Text style={styles.text}>
        Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
      </Text>
      <Text style={styles.bold}>Changes to this Privacy Policy</Text>
      <Text style={styles.text}>
        We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page. We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
      </Text> 
      <Text style={styles.bold}>Contact Us</Text>
      <Text style={styles.text}>
      If you have any questions about this Privacy Policy, You can contact us by email: votha.chheng@gmail.com
      </Text> 
    </ScrollView>
  )
}

export default TermsOfUseScreen

const styles = StyleSheet.create({
  bold: {
    fontFamily: "Inter-Bold",
    color: "black",
    marginVertical: 10
  },
  text: {
    color: "black"
  }
})