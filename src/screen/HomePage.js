import { View, Dimensions, ScrollView } from 'react-native'
import { useEffect, useState } from 'react'
import { COLOR } from '../const/Color';
import Header from '../components/Header';
import Card from '../components/Card';
const { height } = Dimensions.get('window')

const HomePage = () => {
    const [commits, setCommits] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/repos/flutter/flutter/commits')
            .then(response => response.json())
            .then(data => setCommits(data))
            .catch(error => console.error(error));
    }, []);




    return (
        <View style={{ flex: 1, backgroundColor: COLOR.black }}>
            <Header />
            <View style={{ paddingHorizontal: 20, paddingTop: 20, height: height - 70, }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        commits?.slice(0, 25).map((item, i) => {
                            return (

                                <Card data={item} />
                            )
                        })
                    }
                    <View style={{ height: 100 }} />
                </ScrollView>

            </View>
        </View>
    )
}

export default HomePage

