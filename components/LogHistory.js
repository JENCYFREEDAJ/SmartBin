import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

function LogHistory() {

  const dummyData = {
    tableHead: ["S.No", "Date and Time", "Quantity Dumped (in Kg)"],
      tableData: [
        ['1', '25/10/2023', '3'],
        ['2', '24/10/2023', '1'],
        ['3', '23/10/2023', '2'],
        ['4', '22/10/2023', '0.5'],
        ['5', '21/10/2023', '3'],
        ['6', '20/10/2023', '1'],
        ['7', '19/10/2023', '1'],
        ['8', '18/10/2023', '0.8'],
        ['9', '17/10/2023', '2'],
        ['10', '16/10/2023', '1'],
        ['11', '15/10/2023', '0.5'],
        ['12', '14/10/2023', '0.3'],
      ]
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Trash Logs</Text>
      </View>
      <View style={styles.bodycontainer}>
        <ScrollView style={styles.history}>
          <Table borderStyle={{ borderWidth: 1, borderColor:"#EDF2F3", borderRadius:10 }}>
            <Row
              data={dummyData.tableHead}
              flexArr={[1, 2, 2]}
              style={styles.headings}
              textStyle={styles.headingText}
            />
            <Rows data={dummyData.tableData} flexArr={[1, 2, 2]} textStyle={styles.dataText}/>
          </Table>
        </ScrollView>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}>Clear logs</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: '#EDF2F3',
    alignItems: "center",
    justifyContent: "center"
  },
  headerContainer: {
    height: '15%',
    width: WIDTH,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 30,
    marginLeft: 20,
    fontWeight: 'bold',
    color: '#4D8C1C',
  },
  bodycontainer: {
    height: '85%',
    width: "90%",
    alignItems: "center",
    justifyContent: "center"
  },
  history: {
    backgroundColor: "white",
    width: "100%",
    fontSize: 20,
    borderRadius: 20,
    marginBottom: 10
  },
  btn: {
    padding: 15,
    margin: 5,
    width: "75%",
    borderWidth: 1,
    backgroundColor: "#4D8C1C",
    borderColor: "transparent",
    borderRadius: 25,
    alignItems: "center"
  },
  btnTxt: {
    color: "white"
  },
  titleContent: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    paddingLeft: 40,
    margin: 6,
  },
  headingText:{
    color:"white",
    padding:10,
  },
  headings:{
    backgroundColor: "#4D8C1C",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  dataText:{
    color:"#000000",
    padding: 3
  }
});

export default LogHistory
  ;