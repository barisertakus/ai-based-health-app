import React, { useState } from "react";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";
import { StyleSheet, Text, View } from "react-native";


function Autocomplete({list}) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (select) =>{
    console.log(select?.title)
  }

  return (
    <View style={styles.dropdown}>
      <AutocompleteDropdown
        clearOnFocus={false}
        closeOnBlur={true}
        closeOnSubmit={false}
        initialValue={{ id: "2" }} // or just '2'
        onSelectItem={handleSelect}
        dataSet={list}
      />
    </View>
  );
}
export default Autocomplete;

const styles = StyleSheet.create({
  dropdown: {
    paddingHorizontal: 10,
  },
});
