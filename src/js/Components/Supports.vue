<template>
    <div>
        <el-row class="users_details_row">
            <el-col :xs="24" :md="24" class="inner_column">
                <div>
                    <div class="users_details_row_header">
                        <h3>Feedback and Support</h3>
                    </div>
                    <div class="supports_block inner_box" style="text-align:center;">
                        <p>We'd love your help, feedback and support.</p>
                        <ul class="support_items" style="list-style: none;">
                            <li>
                                <a
                                    target="_blank"
                                    href="https://github.com/hasanuzzamanbe/vue-cli-php-mysql"
                                >Fork me on github or clone</a> and help spread the word!
                            </li>
                            <li>
                                <a
                                    href="https://github.com/hasanuzzamanbe/vue-cli-php-mysql/issues"
                                >Report bugs</a> (with steps to reproduce) or
                                <a
                                    target="_blank"
                                    href="https://github.com/hasanuzzamanbe/vue-cli-php-mysql"
                                >Submit pull requests on GitHub</a>
                            </li>
                            <li>
                                Have a question? or Need Expert Support?
                                <a
                                    target="_blank"
                                    href="https://www.hasanuzzaman.com"
                                >Text to developer</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script type="text/babel">
export default {
    name: "Supports"
};
</script>

<style>
.supports_block.inner_box {
    background: white;
    padding: 19px;
}
</style>
