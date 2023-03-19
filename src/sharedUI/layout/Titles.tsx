import { FC } from "react";
import { StyleSheet, Text } from "react-native";
import { globalStyles } from "../../utils/globalStyles";

export type TitlesProps = {
  title: string
}

const Titles: FC<TitlesProps> = ({title}: TitlesProps) => {
  return (
    <Text style={globalStyles.titleStyle}>
        {title}
    </Text>
  );
}


const styles = StyleSheet.create({
  
});

export default Titles;