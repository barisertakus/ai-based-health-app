import React, { useState } from "react";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";
import { StyleSheet, Text, View } from "react-native";
import { useRef } from "react";

function Autocomplete({ list, handleSelect }) {
  const autoRef = useRef();
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <View style={styles.dropdown}>
      <AutocompleteDropdown
        ref={autoRef}
        clearOnFocus={true}
        closeOnSubmit={true}
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
