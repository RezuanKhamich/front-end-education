import {Divider, List, ListItem, ListItemText} from "@mui/material";

export function MuiTest(){
    return(
        <List component="nav" aria-label="mailbox folders">
            <ListItem button>
                <ListItemText primary="Inbox" />
            </ListItem>
            <Divider />
            <ListItem button divider>
                <ListItemText primary="Drafts" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Trash" />
            </ListItem>
            <Divider light />
            <ListItem button>
                <ListItemText primary="Spam" />
            </ListItem>
        </List>
    )
}