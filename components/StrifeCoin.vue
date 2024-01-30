<template>
    <div class="container page-content">
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <h1>{{constants.strife_coin.name}}</h1>

                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <p>By combining the power of personal token with real <b>futility</b> and <b>self-irony</b>, {{constants.strife_coin.symbol}} gives power and opportunity to the people to become the richest person in the world. </p>

                        <p>{{constants.strife_coin.symbol}} is a personal token centered around <strong>Andrea Corriga</strong>, in art <strong>AsoStrife</strong>, Alpha and Omega of this Meme Token.</p>
                        
                        <p>{{constants.strife_coin.symbol}} is a token built on the BSC, decentralised, deflationary, community-built and many other nice words used to describe the meme coin in a long-winded way.</p>

                        <h3>Why should I buy this token?</h3>
                        <ul class="list-unstyled service-list">
                            <li><i class="fas fa-check"></i> Why not? </li>
                            <li><i class="fas fa-check"></i> {{constants.strife_coin.symbol}} is shareable token and you can send it as a gift.; </li>
                            <li><i class="fas fa-check"></i> {{constants.strife_coin.symbol}} is great for short and long investing because yes;</li>
                            <li><i class="fas fa-check"></i> There are no partners or investors; No one will ever interfere with your rise to financial freedom; </li>
                            <li><i class="fas fa-check"></i> No seriously, you need a fifth point to buy some <strong>{{constants.strife_coin.name}}s</strong>?</li>
                            
                        </ul>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <table class="table table-striped table-responsive">
                            <caption>{{constants.strife_coin.name}} ({{constants.strife_coin.symbol}}) Information</caption>
                            <tbody>
                                <tr>
                                    <th>Icon:</th>
                                    <td><img class="rounded-circle img-fluid" :src="constants.strife_coin.icon" :alt="constants.strife_coin.name"/></td>
                                </tr>
                                <tr>
                                    <th>Total Supply:</th>
                                    <td>{{constants.strife_coin.total_supply.toLocaleString()}} {{constants.strife_coin.symbol}}</td>
                                </tr>
                                <tr>
                                    <th>Circulating Supply:</th>
                                    <td>{{constants.strife_coin.circulatin_supply.toLocaleString()}} {{constants.strife_coin.symbol}}</td>
                                </tr>
                                <tr>
                                    <th>Decimals</th>
                                    <td>{{constants.strife_coin.decimals}}</td>
                                </tr>
                                <tr>
                                    <th>Contract</th>
                                    <td>
                                        <a :href="constants.strife_coin.token_url" :title="constants.strife_coin.name" target="_blank">
                                            <small>{{constants.strife_coin.address}}</small> 
                                        </a>
                        
                                        <!--<a class="btn float-right" data-toggle="tooltip">
                                            <i class="fas fa-copy"></i>
                                        </a>-->
                                        
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <a class="btn btn-lg btn-block btn-pancake" :href="constants.strife_coin.pancakeswap" target="_blank">
                            Buy {{constants.strife_coin.symbol}} on Pancake Swap
                        </a>

                    </div>

                </div> <!-- /.row -->

                <div class="row mt-4">
                    <div class="col-lg-12 col-md-12">
                        <small class="mt-3"><i class="fas fa-info-circle mr-2"></i> If for some absurd reason you are seriously considering buying this token, remember that this coin has no fundamental value or purpose. It only exists because I wanted to have a token in the BSC (Binance Smart Chain) with my name on it.</small>
                    </div>
                </div>
            </div>
        </div> <!-- /.row -->
    </div>
</template>

<script>
    import constants from "../constants.js"

    export default {
        name: 'Strife Coin',
        components: {
        },
        data() {
            return {
                constants: constants
            }
        }
    }
</script>

<style scoped>
    th, td {
        font-size: 16px;
    }

    .btn-pancake {
        background-color: #202945;
    }

    @media screen and (max-width: 576px) {
        th, td {
            width: 100%;
        }
    }
</style>