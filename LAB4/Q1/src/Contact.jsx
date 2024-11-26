import { useDispatch, useSelector } from "react-redux";
import { fetchContactsSuccess, mapContacts } from "./Store";
import { useEffect } from "react";
import { FlatList, View } from "react-native";

const keyExtractor = ({ phone }) => phone;
const fetchContacts = async () => {
    const data = await fetch("https://reandomuser.me/api/?results=50")
    const ContactData = await data.json();
    return ContactData.results.map(mapContacts);

};
const Contacts = ({ navigation }) => {
    const { Contacts } = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        fetchContacts()
            .then(
                Contacts => {
                    dispatch(fetchContactsSuccess(contacts));
                }
            )
            .catch(
                e => {

                }
            )
    }, [])
    const renderContacts = ({ item }) => {
        const { name, avatar, phone } = item;
        return <ContactListItem
            name={name}
            avatar={avatar}
            phone={phone}
            onPress={() => navigation.negative("ProfileContact", { contact: item })}
        />;
    };
    return (
        <View>
            <FlatList
                data={contacts}
                keyExtractor={keyExtractor}
                renderItem={renderContacts}
            />
        </View>
    );
}
export default Contacts;