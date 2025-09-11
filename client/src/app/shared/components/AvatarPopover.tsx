import * as React from 'react';
import Popover from '@mui/material/Popover';
import { useState } from 'react';
import { Avatar } from '@mui/material';
import { Link } from 'react-router';
import ProfileCard from '../../../features/profiles/ProfileCard';

type Props = {
    profile: Profile
}

export default function AvatarPopover({ profile }: Props) {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    //   const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <Avatar
                alt={profile.displayName + 'image'}
                src={profile.imageUrl}
                component={Link}
                to={`/profiles/${profile.id}`}
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            />
            <Popover
                id="mouse-over-popper"
                open={open}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                sx={{ pointerEvents: 'none' }}
                disableRestoreFocus
                disableAutoFocus
                disableEnforceFocus
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <ProfileCard profile={profile} />
            </Popover>
        </>
    );
}
