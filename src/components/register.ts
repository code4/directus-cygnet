import Vue from 'vue';

import VAvatar from './v-avatar/';
import VButton from './v-button/';
import VCheckbox from './v-checkbox/';
import VChip from './v-chip/';
import VForm from './v-form';
import VHover from './v-hover/';
import VIcon from './v-icon/';
import VInput from './v-input/';
import VItemGroup, { VItem } from './v-item-group';
import VList, { VListItem, VListItemContent } from './v-list/';
import VOverlay from './v-overlay/';
import VProgressLinear from './v-progress/linear/';
import VProgressCircular from './v-progress/circular/';
import VSheet from './v-sheet/';
import VSlider from './v-slider/';
import VSwitch from './v-switch/';
import VTable from './v-table/';

Vue.component('v-avatar', VAvatar);
Vue.component('v-button', VButton);
Vue.component('v-checkbox', VCheckbox);
Vue.component('v-chip', VChip);
Vue.component('v-form', VForm);
Vue.component('v-hover', VHover);
Vue.component('v-icon', VIcon);
Vue.component('v-input', VInput);
Vue.component('v-item-group', VItemGroup);
Vue.component('v-item', VItem);
Vue.component('v-list', VList);
Vue.component('v-list-item', VListItem);
Vue.component('v-list-item-content', VListItemContent);
Vue.component('v-overlay', VOverlay);
Vue.component('v-progress-linear', VProgressLinear);
Vue.component('v-progress-circular', VProgressCircular);
Vue.component('v-sheet', VSheet);
Vue.component('v-slider', VSlider);
Vue.component('v-switch', VSwitch);
Vue.component('v-table', VTable);

import DrawerDetail from '@/views/private-view/drawer-detail/';

Vue.component('drawer-detail', DrawerDetail);
