import Vue from 'vue';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';

import {
    Button,
    ButtonGroup,
    Message,
    MessageBox,
    Icon,
    ColorPicker,
    Input,
    Checkbox,
    RadioGroup,
    Radio,
    Option,
    OptionGroup,
    RadioButton,
    Row,
    Col,
    InputNumber,
    Tooltip,
    Upload
} from 'element-ui';

Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(InputNumber);
Vue.use(ColorPicker);
Vue.use(Icon);
Vue.use(Tooltip);
Vue.use(Input);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Checkbox);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(RadioButton);
Vue.use(Row);
Vue.use(Col);
Vue.use(Upload);

Vue.prototype.$message = Message;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;

locale.use(lang);

export default Vue;
