

import React from 'react';
import { SectionList, StyleSheet, ScrollView, Button, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer, StackActions, NavigationActions } from "react-navigation";

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
  },
  bigTitle: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 40,
  },
  container: {
   flex: 1,
   flexDirection: 'column',
   alignItems: 'stretch',
   paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 15,
    height: 44,
    color: 'white',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 15,
  },
});

class Phorni extends React.Component {
  render() {
    let fal = {
        uri: 'https://cdn.discordapp.com/attachments/527581955504734212/609486729518514216/srchr030.png'
    }
    let lise = {
        uri: 'https://cdn.discordapp.com/attachments/527581955504734212/609486732215320582/srchr050.png'
    }
    let torta = {
        uri: 'https://cdn.discordapp.com/attachments/527581955504734212/609486726712393752/srchr001.png'
    }
    let bg = {
        uri: 'https://cdn.discordapp.com/attachments/527581955504734212/611962097211015169/bg362.png'
    }
    return (
        <ImageBackground source={bg} style={{width: '100%', height: '100%'}}>
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column' }}>
                <Text style={styles.bigTitle}>Symphonic Rain Guide</Text>

                <View style={styles.container}>
                    <SectionList
                        sections={[
                            {title: 'Before you read: Part 1', data:
                            ['1. Full names – Nicknames',
                            '   Tortinita Fine – Torta',
                            '   Arietta Fine – Arie',
                            '   Falsita Fawcett – Fal',
                            '   Liselsia Cesarini – Lise',
                            '   Chris Velding – Chris']},
                        ]}
                        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                        keyExtractor={(item, index) => index}
                    />
                    <SectionList
                        sections={[
                            {title: 'Before you read: Part 2', data:
                            ['1. Days of the Week（Italian – English)',
                            '   Lunedì – Monday',
                            '   Martedì – Tuesday',
                            '   Mercoledì – Wednesday',
                            '   Giovedì – Thursday',
                            '   Venerdì – Friday',
                            '   Sabato – Saturday',
                            '   Domenica – Sunday']},
                        ]}
                        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                        keyExtractor={(item, index) => index}
                    />
                    <SectionList
                        sections={[
                            {title: 'Gameplay Information', data:
                            ['Holding “Esc” for a while will end a performance,',
                            'and this also means you fail to perform.',
                            'However, if autoplay is turned on, then you will pass',
                            'the performance. When you perform a song, there is',
                            'an Evaluation System consisting of 5 bigger bulbs',
                            '(three are bronze; two are golden), and 10 smaller',
                            'bulbs under them. You need to light at least',
                            '4 out of 5 bigger bulbs to make a performance',
                            'successful. The system will ask your whether',
                            'or not to perform again when you fail.']},
                        ]}
                        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                        keyExtractor={(item, index) => index}
                    />
                    <SectionList
                        sections={[
                            {title: 'Gameplay Difficulty', data:
                            ['Difficulty – Keys in a performance',
                            'Easy – DFJK',
                            'Normal – ASDFJKL;',
                            'Hard – From “Q “ to “/”']},
                        ]}
                        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                        keyExtractor={(item, index) => index}
                    />
                    <SectionList
                        sections={[
                            {title: 'Guide Start', data:
                            ['The story diverges based on choices made.',
                            'The recommended order for routes are',
                            'Fal > Lise > Torta',
                            'Click the links to see the choices needed',
                            'to be made to get through each story',]},
                        ]}
                        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                        keyExtractor={(item, index) => index}
                    />
                </View>
                <Image source={fal} style={{width: 319, height: 480}}/>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Falsita')}
                >
                    <Text style={{ fontSize: 20, color: 'blue' }}> Fal's Route </Text>
                </TouchableOpacity>
                <Image source={lise} style={{width: 320, height: 480}}/>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Liselsia')}
                >
                    <Text style={{ fontSize: 20, color: 'blue' }}> Lise's Route </Text>
                </TouchableOpacity>
                <Image source={torta} style={{width: 340, height: 480}}/>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Tortinita')}
                >
                    <Text style={{ fontSize: 20, color: 'blue' }}> Torta's Route </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        </ImageBackground>
    );
  }
}

class Fal extends React.Component {
  render() {
      let bg = {
          uri: 'https://cdn.discordapp.com/attachments/527581955504734212/611962097211015169/bg362.png'
      }
    return (
    <ImageBackground source={bg} style={{width: '100%', height: '100%'}}>
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column' }}>
                <Text style={styles.bigTitle}>Falsita Fawcett</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'stretch'}}>
                <Text style={{ backgroundColor: "white" }}>Choices marked
                    in
                    <Text style={{ backgroundColor: "white", color: "yellow" }}> yellow </Text>
                    are critical choices that will affect if you stay in the route. Fal's
                    story contains three bad ends. Choices marked in
                    <Text style={{ backgroundColor: "white", color: "red" }}> red </Text>
                    will lead to a bad end.
        </Text>
    </View>
      <View style={{ flex: 1 }}>
        <Text style={{ color: "white" }}>>Explain carefully{'\n'}
        >Not Today{'\n'}
        >Cenacolo{'\n'}
        >Practice Rooms{'\n'}
        >Don’t Practice a Song{'\n'}
        >Classrooms{'\n'}
        >The Old Wing{'\n'}
        >I don’t believe{'\n'}
        >Not Today{'\n'}
        >Practice Rooms{'\n'}
        >Practice in Parts{'\n'}
        <Text style={{ color: "yellow" }}>>LEFTMOST Practice Rooms{'\n'}</Text>
        >Ready when you are{'\n'}
        >Practice Rooms{'\n'}
        >Practice in Parts{'\n'}
        <Text style={{ color: "yellow" }}>>LEFTMOST Practice Rooms{'\n'}</Text>
        <Text style={{ color: "yellow" }}>>LEFTMOST Practice Rooms{'\n'}</Text>
        >Practice Rooms{'\n'}
        >Practice in Parts{'\n'}
        <Text style={{ color: "yellow" }}>>LEFTMOST Practice Rooms{'\n'}</Text>
        <Text style={{ color: "yellow" }}>>LEFTMOST Practice Rooms{'\n'}</Text>
        <Text style={{ color: "yellow" }}>>Go with Fal{'\n'}</Text>
        >Practice Rooms{'\n'}
        >Practice in Parts{'\n'}
        >Let's practice{'\n'}
        <Text style={{ color: "yellow" }}>>LEFTMOST Practice Rooms{'\n'}</Text>
        >Go{'\n'}
        >Stop{'\n'}
        <Text style={{ color: "yellow" }}>>Shut up!</Text> / <Text style={{ color: "red" }}>...That’s enough. (Bad End 1){'\n'}</Text>
        <Text style={{ color: "yellow" }}>>Pass recital song game</Text> / <Text style={{ color: "red" }}>Fail recital (Bad End 2){'\n'}</Text>
        <Text style={{ color: "yellow" }}>>I’ll go with you (Good End)</Text> / <Text style={{ color: "red" }}>Don’t Go (Bad End 3) {'\n'}</Text>
        </Text>
      </View>
    </ScrollView>
    </ImageBackground>
    );
  }
}

class Lise extends React.Component {
    render() {
        let bg = {
            uri: 'https://cdn.discordapp.com/attachments/527581955504734212/611962097211015169/bg362.png'
        }
        return (
            <ImageBackground source={bg} style={{width: '100%', height: '100%'}}>
                <ScrollView>
                    <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column' }}>
                        <Text style={styles.bigTitle}>Liselsia Cesarini</Text>
                    </View>
                    <View style={{flex: 1, flexDirection: 'column', alignItems: 'stretch'}}>
                        <Text style={{ backgroundColor: "white" }}>Choices marked
                            in
                            <Text style={{ backgroundColor: "white", color: "yellow" }}> yellow </Text>
                            are critical choices that will affect if you stay in the route. Lise's
                            story contains one bad end. Action marked in
                            <Text style={{ backgroundColor: "white", color: "red" }}> red </Text>
                            will lead to a bad end.
                        </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: "white" }}>>Explain carefully{'\n'}
                        >Not today{'\n'}
                        >The Old Wing{'\n'}
                        >Practice Rooms{'\n'}
                        >Don't practice a song{'\n'}
                        >Cenacolo{'\n'}
                        >Classrooms{'\n'}
                        >I don't believe{'\n'}
                        >Not today{'\n'}
                        <Text style={{ color: "yellow" }}>>The Old Wing{'\n'}</Text>
                        <Text style={{ color: "yellow" }}>>The Old Wing{'\n'}</Text>
                        <Text style={{ color: "yellow" }}>>The Old Wing{'\n'}</Text>
                        >Ready when you are{'\n'}
                        >Practice Rooms{'\n'}
                        >Practice in parts{'\n'}
                        <Text style={{ color: "yellow" }}>>The Old Wing{'\n'}</Text>
                        <Text style={{ color: "yellow" }}>>Yes{'\n'}</Text>
                        >No{'\n'}
                        <Text style={{ color: "yellow" }}>>Pass Recital (Good End)</Text>
                        / <Text style={{ color: "red" }}>Fail Recital (Bad End)</Text>
                        </Text>
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}

class Torta extends React.Component {
    render() {
        // background image
        let bg = {
            uri: 'https://cdn.discordapp.com/attachments/527581955504734212/611962097211015169/bg362.png'
        }
        return (
            // Have the background image fill the entire page
            <ImageBackground source={bg} style={{width: '100%', height: '100%'}}>
                <ScrollView>
                    <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column' }}>
                        <Text style={styles.bigTitle}>Tortinita Fine</Text>
                    </View>
                    <View style={{flex: 1, flexDirection: 'column', alignItems: 'stretch'}}>
                        <Text style={{ backgroundColor: "white" }}>Choices marked
                            in
                            <Text style={{ backgroundColor: "white", color: "yellow" }}> yellow </Text>
                            are critical choices that will affect if you stay in the route. Torta's
                            story contains one bad end that can also be reached if you do
                            not enter a route. The choice marked in
                            <Text style={{ backgroundColor: "white", color: "red" }}> red </Text>
                            will lead to a bad end.
                        </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: "white" }}>>Don't deny it{'\n'}
                        >Ask her{'\n'}
                        >I believe{'\n'}
                        >Practice Rooms{'\n'}
                        >Don't practice a song{'\n'}
                        >The Old Wing{'\n'}
                        >Cenacolo{'\n'}
                        >Classrooms{'\n'}
                        >Practice{'\n'}
                        >Practice Rooms{'\n'}
                        >Practice in parts{'\n'}
                        <Text style={{ color: "yellow" }}>>Cafeteria{'\n'}</Text>
                        >Ready when you are{'\n'}
                        <Text style={{ color: "yellow" }}>>Cafeteria{'\n'}</Text>
                        <Text style={{ color: "yellow" }}>>Cafeteria{'\n'}</Text>
                        >Practice Rooms{'\n'}
                        >Practice in parts{'\n'}
                        <Text style={{ color: "yellow" }}>>Cafeteria{'\n'}</Text>
                        >Practice Rooms{'\n'}
                        >Practice in parts{'\n'}
                        <Text style={{ color: "yellow" }}>>Cafeteria{'\n'}</Text>
                        <Text style={{ color: "yellow" }}>>I do</Text> /
                            <Text style={{ color: "red" }}> I don't know (General End)</Text>
                        </Text>
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}

// Stacks of different pages in the app
// Phorni page is the first page shown
const RootStack = createStackNavigator({
  Phorni: Phorni,
  Falsita: Fal,
  Liselsia: Lise,
  Tortinita: Torta,
}, {
    initialRouteName: 'Phorni',
});

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
