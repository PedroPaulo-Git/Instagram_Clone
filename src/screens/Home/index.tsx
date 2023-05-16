
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Logo from '../../assets/logo.svg'
import Stroke from '../../assets/stroke.svg'
import Message from '../../assets/message.svg'
import foto from "../../assets/foto.png"
import foto2 from "../../assets/foto2.png"
import foto3 from "../../assets/foto3.png"
import foto4 from "../../assets/foto4.png"
import foto5 from "../../assets/foto5.png"
import Points from "../../assets/points.svg"
import imgfeed1 from "../../assets/imgfeed1.png"
import imgfeed2 from "../../assets/imgfeed2.png"
import imgfeed3 from "../../assets/imgfeed2.png"
import imgfeed4 from "../../assets/imgfeed2.png"
import Comment from '../../assets/Comment.svg'
import Bookmark from '../../assets/Bookmark.svg'
import Share from '../../assets/Share.svg'
import Heart from '../../assets/Heart.svg'

const DATA = [
    {
        id: Math.random().toString(36).substring(2,27),
        photoURL:foto,
    },
    {
        id: Math.random().toString(36).substring(2,27),
        photoURL:foto2,
    },
    {
        id: Math.random().toString(36).substring(2,27),
        photoURL:foto3,
    },
    {
        id: Math.random().toString(36).substring(2,27),
        photoURL:foto4,
    },
    {
      id: Math.random().toString(36).substring(2,27),
      photoURL:foto5,
  },
    {
        id: Math.random().toString(36).substring(2,27),
        photoURL:foto,
    },
    {
        id: Math.random().toString(36).substring(2,27),
        photoURL:foto2,
    },
    {
        id: Math.random().toString(36).substring(2,27),
        photoURL:foto3,
    },
    {
        id: Math.random().toString(36).substring(2,27),
        photoURL:foto4,
    },
    {
      id: Math.random().toString(36).substring(2,27),
      photoURL:foto5,
  },
    {
        id: Math.random().toString(36).substring(2,27),
        photoURL:foto,
    },
    {
        id: Math.random().toString(36).substring(2,27),
        photoURL:foto2,
    },
    {
        id: Math.random().toString(36).substring(2,27),
        photoURL:foto3,
    },
    {
        id: Math.random().toString(36).substring(2,27),
        photoURL:foto4,
    },
]

export function Home() {
  return (
    <View style={styles.container}> 
        <View style = {styles.header}>
            <Logo/>
            <View style = {styles.headerOptions}>
                <Stroke/>
                <Message style={{ marginLeft:25,marginRight:5}} />
            </View>
    
    </View>
    <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
    <View style={styles.stories}>
        <FlatList
        horizontal = {true}
        data ={DATA} 
        keyExtractor = {(item) => item.id}
        renderItem = {(item) => (
            <View style={styles.storiesCard} key = {item.item.id}>
                <Image style={styles.storiesCardImage} source={item.item.photoURL}/>
            </View>

        )}
        />
    </View >


    <View style={styles.feed}>


        <View style={styles.contenttop_all}>
           <View  style={styles.topimg}>
             <Image style = {styles.topimgcontent}
             source={foto} />
             <Text style = {styles.Textcontentleft}>Usuário</Text>
       
         </View>

        <Points style = {{marginEnd:5}}/>

       </View>
       <View>
          <Image style = {styles.feedimg}
            source={imgfeed1}
          />
       </View>
<View style = {styles.footerfeed}>
    <View style = {styles.footerfeedicons}> 
        <Heart style={{ marginHorizontal: 8,marginLeft:8}} />
        <Comment style={{ marginHorizontal: 8 }} />
        <Share style={{ marginHorizontal: 8 }} />
     </View>

        <Bookmark style= {{marginRight:8}}/>
        
        </View>
        <View style ={styles.footercomentarios_all}>
          <Text style ={styles.footercomentarios}>
            Curtido por <Text style ={styles.strongtextfooter}>Pedro.paulo908</Text> e <Text style ={styles.strongtextfooter}>outras pessoas</Text>
            </Text>
            <Text style ={styles.footercomentarioscinza}>
            Ver todos os 3 comentários
            </Text>
            <Text style ={styles.footercomentarios}>
         <Text style ={styles.footercomentarioshrs}>Há 2 horas</Text> • <Text style ={styles.strongtextfooter}>Ver Tradução</Text>
            </Text>
        </View>
    </View>

    <View style={styles.feed}>


<View style={styles.contenttop_all}>
   <View  style={styles.topimg}>
     <Image style = {styles.topimgcontent}
     source={foto2} />
     <Text style = {styles.Textcontentleft}>Usuário 2</Text>

 </View>

<Points style = {{marginEnd:5}}/>

</View>
<View>
  <Image style = {styles.feedimg}
    source={imgfeed2}
  />
</View>
<View style = {styles.footerfeed}>
<View style = {styles.footerfeedicons}> 
<Heart style={{ marginHorizontal: 8,marginLeft:8}} />
<Comment style={{ marginHorizontal: 8 }} />
<Share style={{ marginHorizontal: 8 }} />
</View>

<Bookmark style= {{marginRight:8}}/>

</View>
<View style ={styles.footercomentarios_all}>
  <Text style ={styles.footercomentarios}>
    Curtido por <Text style ={styles.strongtextfooter}>Pedro.paulo908</Text> e <Text style ={styles.strongtextfooter}>outras pessoas</Text>
    </Text>
    <Text style ={styles.footercomentarioscinza}>
    Ver todos os 3 comentários
    </Text>
    <Text style ={styles.footercomentarios}>
 <Text style ={styles.footercomentarioshrs}>Há 2 horas</Text> • <Text style ={styles.strongtextfooter}>Ver Tradução</Text>
    </Text>
</View>
</View>

<View style={styles.feed}>


<View style={styles.contenttop_all}>
   <View  style={styles.topimg}>
     <Image style = {styles.topimgcontent}
     source={foto3} />
     <Text style = {styles.Textcontentleft}>Usuário 2</Text>

 </View>

<Points style = {{marginEnd:5}}/>

</View>
<View>
  <Image style = {styles.feedimg}
    source={imgfeed1}
  />
</View>
<View style = {styles.footerfeed}>
<View style = {styles.footerfeedicons}> 
<Heart style={{ marginHorizontal: 8,marginLeft:8}} />
<Comment style={{ marginHorizontal: 8 }} />
<Share style={{ marginHorizontal: 8 }} />
</View>

<Bookmark style= {{marginRight:8}}/>

</View>
<View style ={styles.footercomentarios_all}>
  <Text style ={styles.footercomentarios}>
    Curtido por <Text style ={styles.strongtextfooter}>Pedro.paulo908</Text> e <Text style ={styles.strongtextfooter}>outras pessoas</Text>
    </Text>
    <Text style ={styles.footercomentarioscinza}>
    Ver todos os 3 comentários
    </Text>
    <Text style ={styles.footercomentarios}>
 <Text style ={styles.footercomentarioshrs}>Há 2 horas</Text> • <Text style ={styles.strongtextfooter}>Ver Tradução</Text>
    </Text>
</View>
</View>

<View style={styles.feed}>


<View style={styles.contenttop_all}>
   <View  style={styles.topimg}>
     <Image style = {styles.topimgcontent}
     source={foto5} />
     <Text style = {styles.Textcontentleft}>Usuário 2</Text>

 </View>

<Points style = {{marginEnd:5}}/>

</View>
<View>
  <Image style = {styles.feedimg}
    source={imgfeed1}
  />
</View>
<View style = {styles.footerfeed}>
<View style = {styles.footerfeedicons}> 
<Heart style={{ marginHorizontal: 8,marginLeft:8}} />
<Comment style={{ marginHorizontal: 8 }} />
<Share style={{ marginHorizontal: 8 }} />
</View>

<Bookmark style= {{marginRight:8}}/>

</View>
<View style ={styles.footercomentarios_all}>
  <Text style ={styles.footercomentarios}>
    Curtido por <Text style ={styles.strongtextfooter}>Pedro.paulo908</Text> e <Text style ={styles.strongtextfooter}>outras pessoas</Text>
    </Text>
    <Text style ={styles.footercomentarioscinza}>
    Ver todos os 3 comentários
    </Text>
    <Text style ={styles.footercomentarios}>
 <Text style ={styles.footercomentarioshrs}>Há 2 horas</Text> • <Text style ={styles.strongtextfooter}>Ver Tradução</Text>
    </Text>
</View>
</View>

<View style={styles.feed}>


<View style={styles.contenttop_all}>
   <View  style={styles.topimg}>
     <Image style = {styles.topimgcontent}
     source={foto3} />
     <Text style = {styles.Textcontentleft}>Usuário 2</Text>

 </View>

<Points style = {{marginEnd:5}}/>

</View>
<View>
  <Image style = {styles.feedimg}
    source={imgfeed2}
  />
</View>
<View style = {styles.footerfeed}>
<View style = {styles.footerfeedicons}> 
<Heart style={{ marginHorizontal: 8,marginLeft:8}} />
<Comment style={{ marginHorizontal: 8 }} />
<Share style={{ marginHorizontal: 8 }} />
</View>

<Bookmark style= {{marginRight:8}}/>

</View>
<View style ={styles.footercomentarios_all}>
  <Text style ={styles.footercomentarios}>
    Curtido por <Text style ={styles.strongtextfooter}>Pedro.paulo908</Text> e <Text style ={styles.strongtextfooter}>outras pessoas</Text>
    </Text>
    <Text style ={styles.footercomentarioscinza}>
    Ver todos os 3 comentários
    </Text>
    <Text style ={styles.footercomentarios}>
 <Text style ={styles.footercomentarioshrs}>Há 2 horas</Text> • <Text style ={styles.strongtextfooter}>Ver Tradução</Text>
    </Text>
</View>
</View>

<View style={styles.feed}>


<View style={styles.contenttop_all}>
   <View  style={styles.topimg}>
     <Image style = {styles.topimgcontent}
     source={foto2} />
     <Text style = {styles.Textcontentleft}>Usuário 2</Text>

 </View>

<Points style = {{marginEnd:5}}/>

</View>
<View>
  <Image style = {styles.feedimg}
    source={imgfeed3}
  />
</View>
<View style = {styles.footerfeed}>
<View style = {styles.footerfeedicons}> 
<Heart style={{ marginHorizontal: 8,marginLeft:8}} />
<Comment style={{ marginHorizontal: 8 }} />
<Share style={{ marginHorizontal: 8 }} />
</View>

<Bookmark style= {{marginRight:8}}/>

</View>
<View style ={styles.footercomentarios_all}>
  <Text style ={styles.footercomentarios}>
    Curtido por <Text style ={styles.strongtextfooter}>Pedro.paulo908</Text> e <Text style ={styles.strongtextfooter}>outras pessoas</Text>
    </Text>
    <Text style ={styles.footercomentarioscinza}>
    Ver todos os 3 comentários
    </Text>
    <Text style ={styles.footercomentarios}>
 <Text style ={styles.footercomentarioshrs}>Há 2 horas</Text> • <Text style ={styles.strongtextfooter}>Ver Tradução</Text>
    </Text>
</View>
</View>
    </ScrollView>
    </View>
);
}
   
             
           
           
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#000',
    alignItems: 'center',

  },
  header:{
    marginTop:40, 
    paddingHorizontal: 10,
    width: "100%",
    height: 56,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerOptions:{
    alignItems: "center",
    flexDirection: "row",
    
  },
  stories:{
    marginTop:10,
    width: '100%',
    paddingLeft: 15,
    alignItems: "center",
  },
  storiesCard: {
    padding: 3,
    alignItems:"center",
    borderWidth: 2,
    borderColor: "#F7B55A",
    borderRadius: 50,
    marginRight:14,

  },
  storiesCardImage:{
    width:60,
    height:60,
    borderRadius:50,
  },
  feed: {
    marginTop:20,
    width:'100%',
    height:360,
    marginBottom:150,
  },
  contenttop_all: { 
    paddingHorizontal: 10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:"100%",
    backgroundColor:'black',
    height:50,
  },
  topimg:{
    flexDirection:'row',
    alignItems:"center",
    height:'100%',

  },
  topimgcontent:{
    width:30,
    height:30,
    borderRadius:50,
  },
  Textcontentleft:{
    marginHorizontal:10,
    color:"white",
    fontSize:14,
    fontWeight:'600'
  },
  feedimg:{
    width:'100%',
    height:'100%',
    paddingVertical:20,
  },
  footerfeed:{
    marginTop:10,
    flexDirection:'row',
    alignItems:'center',
   justifyContent:'space-between',

    
  },
  footerfeedicons:{
    
    flexDirection:'row',
    alignItems:'center',
   
  },
  footercomentarios_all:{
    marginTop:10,
    marginLeft:10,
  },
  footercomentarios:{
    color:'white',
  },
  strongtextfooter:{
    fontWeight:'600',
  },
  footercomentarioscinza:{
    color:'grey',
  },
  footercomentarioshrs:{
    color:'grey',
    fontSize:11,
    marginLeft:2,
  }
});

