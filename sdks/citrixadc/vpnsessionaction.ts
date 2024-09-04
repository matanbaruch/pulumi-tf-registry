// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Vpnsessionaction extends pulumi.CustomResource {
    /**
     * Get an existing Vpnsessionaction resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VpnsessionactionState, opts?: pulumi.CustomResourceOptions): Vpnsessionaction {
        return new Vpnsessionaction(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/vpnsessionaction:Vpnsessionaction';

    /**
     * Returns true if the given object is an instance of Vpnsessionaction.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Vpnsessionaction {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Vpnsessionaction.__pulumiType;
    }

    public readonly advancedclientlessvpnmode!: pulumi.Output<string>;
    public readonly allowedlogingroups!: pulumi.Output<string>;
    public readonly allprotocolproxy!: pulumi.Output<string>;
    public readonly alwaysonprofilename!: pulumi.Output<string>;
    public readonly authorizationgroup!: pulumi.Output<string>;
    public readonly autoproxyurl!: pulumi.Output<string>;
    public readonly citrixreceiverhome!: pulumi.Output<string>;
    public readonly clientchoices!: pulumi.Output<string>;
    public readonly clientcleanupprompt!: pulumi.Output<string>;
    public readonly clientconfigurations!: pulumi.Output<string[]>;
    public readonly clientdebug!: pulumi.Output<string>;
    public readonly clientidletimeout!: pulumi.Output<number>;
    public readonly clientlessmodeurlencoding!: pulumi.Output<string>;
    public readonly clientlesspersistentcookie!: pulumi.Output<string>;
    public readonly clientlessvpnmode!: pulumi.Output<string>;
    public readonly clientoptions!: pulumi.Output<string>;
    public readonly clientsecurity!: pulumi.Output<string>;
    public readonly clientsecuritygroup!: pulumi.Output<string>;
    public readonly clientsecuritylog!: pulumi.Output<string>;
    public readonly clientsecuritymessage!: pulumi.Output<string>;
    public readonly defaultauthorizationaction!: pulumi.Output<string>;
    public readonly dnsvservername!: pulumi.Output<string>;
    public readonly emailhome!: pulumi.Output<string>;
    public readonly epaclienttype!: pulumi.Output<string>;
    public readonly forcecleanups!: pulumi.Output<string[]>;
    public readonly forcedtimeout!: pulumi.Output<number>;
    public readonly forcedtimeoutwarning!: pulumi.Output<number>;
    public readonly fqdnspoofedip!: pulumi.Output<string>;
    public readonly ftpproxy!: pulumi.Output<string>;
    public readonly gopherproxy!: pulumi.Output<string>;
    public readonly homepage!: pulumi.Output<string>;
    public readonly httpports!: pulumi.Output<number[]>;
    public readonly httpproxy!: pulumi.Output<string>;
    public readonly icaproxy!: pulumi.Output<string>;
    public readonly iconwithreceiver!: pulumi.Output<string>;
    public readonly iipdnssuffix!: pulumi.Output<string>;
    public readonly kcdaccount!: pulumi.Output<string>;
    public readonly killconnections!: pulumi.Output<string>;
    public readonly linuxpluginupgrade!: pulumi.Output<string>;
    public readonly locallanaccess!: pulumi.Output<string>;
    public readonly loginscript!: pulumi.Output<string>;
    public readonly logoutscript!: pulumi.Output<string>;
    public readonly macpluginupgrade!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly netmask!: pulumi.Output<string>;
    public readonly ntdomain!: pulumi.Output<string>;
    public readonly pcoipprofilename!: pulumi.Output<string>;
    public readonly proxy!: pulumi.Output<string>;
    public readonly proxyexception!: pulumi.Output<string>;
    public readonly proxylocalbypass!: pulumi.Output<string>;
    public readonly rdpclientprofilename!: pulumi.Output<string>;
    public readonly rfc1918!: pulumi.Output<string>;
    public readonly securebrowse!: pulumi.Output<string>;
    public readonly sesstimeout!: pulumi.Output<number>;
    public readonly sfgatewayauthtype!: pulumi.Output<string>;
    public readonly smartgroup!: pulumi.Output<string>;
    public readonly socksproxy!: pulumi.Output<string>;
    public readonly splitdns!: pulumi.Output<string>;
    public readonly splittunnel!: pulumi.Output<string>;
    public readonly spoofiip!: pulumi.Output<string>;
    public readonly sslproxy!: pulumi.Output<string>;
    public readonly sso!: pulumi.Output<string>;
    public readonly ssocredential!: pulumi.Output<string>;
    public readonly storefronturl!: pulumi.Output<string>;
    public readonly transparentinterception!: pulumi.Output<string>;
    public readonly useiip!: pulumi.Output<string>;
    public readonly usemip!: pulumi.Output<string>;
    public readonly useraccounting!: pulumi.Output<string>;
    public readonly wihome!: pulumi.Output<string>;
    public readonly wihomeaddresstype!: pulumi.Output<string>;
    public readonly windowsautologon!: pulumi.Output<string>;
    public readonly windowsclienttype!: pulumi.Output<string>;
    public readonly windowspluginupgrade!: pulumi.Output<string>;
    public readonly winsip!: pulumi.Output<string>;
    public readonly wiportalmode!: pulumi.Output<string>;

    /**
     * Create a Vpnsessionaction resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: VpnsessionactionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VpnsessionactionArgs | VpnsessionactionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VpnsessionactionState | undefined;
            resourceInputs["advancedclientlessvpnmode"] = state ? state.advancedclientlessvpnmode : undefined;
            resourceInputs["allowedlogingroups"] = state ? state.allowedlogingroups : undefined;
            resourceInputs["allprotocolproxy"] = state ? state.allprotocolproxy : undefined;
            resourceInputs["alwaysonprofilename"] = state ? state.alwaysonprofilename : undefined;
            resourceInputs["authorizationgroup"] = state ? state.authorizationgroup : undefined;
            resourceInputs["autoproxyurl"] = state ? state.autoproxyurl : undefined;
            resourceInputs["citrixreceiverhome"] = state ? state.citrixreceiverhome : undefined;
            resourceInputs["clientchoices"] = state ? state.clientchoices : undefined;
            resourceInputs["clientcleanupprompt"] = state ? state.clientcleanupprompt : undefined;
            resourceInputs["clientconfigurations"] = state ? state.clientconfigurations : undefined;
            resourceInputs["clientdebug"] = state ? state.clientdebug : undefined;
            resourceInputs["clientidletimeout"] = state ? state.clientidletimeout : undefined;
            resourceInputs["clientlessmodeurlencoding"] = state ? state.clientlessmodeurlencoding : undefined;
            resourceInputs["clientlesspersistentcookie"] = state ? state.clientlesspersistentcookie : undefined;
            resourceInputs["clientlessvpnmode"] = state ? state.clientlessvpnmode : undefined;
            resourceInputs["clientoptions"] = state ? state.clientoptions : undefined;
            resourceInputs["clientsecurity"] = state ? state.clientsecurity : undefined;
            resourceInputs["clientsecuritygroup"] = state ? state.clientsecuritygroup : undefined;
            resourceInputs["clientsecuritylog"] = state ? state.clientsecuritylog : undefined;
            resourceInputs["clientsecuritymessage"] = state ? state.clientsecuritymessage : undefined;
            resourceInputs["defaultauthorizationaction"] = state ? state.defaultauthorizationaction : undefined;
            resourceInputs["dnsvservername"] = state ? state.dnsvservername : undefined;
            resourceInputs["emailhome"] = state ? state.emailhome : undefined;
            resourceInputs["epaclienttype"] = state ? state.epaclienttype : undefined;
            resourceInputs["forcecleanups"] = state ? state.forcecleanups : undefined;
            resourceInputs["forcedtimeout"] = state ? state.forcedtimeout : undefined;
            resourceInputs["forcedtimeoutwarning"] = state ? state.forcedtimeoutwarning : undefined;
            resourceInputs["fqdnspoofedip"] = state ? state.fqdnspoofedip : undefined;
            resourceInputs["ftpproxy"] = state ? state.ftpproxy : undefined;
            resourceInputs["gopherproxy"] = state ? state.gopherproxy : undefined;
            resourceInputs["homepage"] = state ? state.homepage : undefined;
            resourceInputs["httpports"] = state ? state.httpports : undefined;
            resourceInputs["httpproxy"] = state ? state.httpproxy : undefined;
            resourceInputs["icaproxy"] = state ? state.icaproxy : undefined;
            resourceInputs["iconwithreceiver"] = state ? state.iconwithreceiver : undefined;
            resourceInputs["iipdnssuffix"] = state ? state.iipdnssuffix : undefined;
            resourceInputs["kcdaccount"] = state ? state.kcdaccount : undefined;
            resourceInputs["killconnections"] = state ? state.killconnections : undefined;
            resourceInputs["linuxpluginupgrade"] = state ? state.linuxpluginupgrade : undefined;
            resourceInputs["locallanaccess"] = state ? state.locallanaccess : undefined;
            resourceInputs["loginscript"] = state ? state.loginscript : undefined;
            resourceInputs["logoutscript"] = state ? state.logoutscript : undefined;
            resourceInputs["macpluginupgrade"] = state ? state.macpluginupgrade : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["netmask"] = state ? state.netmask : undefined;
            resourceInputs["ntdomain"] = state ? state.ntdomain : undefined;
            resourceInputs["pcoipprofilename"] = state ? state.pcoipprofilename : undefined;
            resourceInputs["proxy"] = state ? state.proxy : undefined;
            resourceInputs["proxyexception"] = state ? state.proxyexception : undefined;
            resourceInputs["proxylocalbypass"] = state ? state.proxylocalbypass : undefined;
            resourceInputs["rdpclientprofilename"] = state ? state.rdpclientprofilename : undefined;
            resourceInputs["rfc1918"] = state ? state.rfc1918 : undefined;
            resourceInputs["securebrowse"] = state ? state.securebrowse : undefined;
            resourceInputs["sesstimeout"] = state ? state.sesstimeout : undefined;
            resourceInputs["sfgatewayauthtype"] = state ? state.sfgatewayauthtype : undefined;
            resourceInputs["smartgroup"] = state ? state.smartgroup : undefined;
            resourceInputs["socksproxy"] = state ? state.socksproxy : undefined;
            resourceInputs["splitdns"] = state ? state.splitdns : undefined;
            resourceInputs["splittunnel"] = state ? state.splittunnel : undefined;
            resourceInputs["spoofiip"] = state ? state.spoofiip : undefined;
            resourceInputs["sslproxy"] = state ? state.sslproxy : undefined;
            resourceInputs["sso"] = state ? state.sso : undefined;
            resourceInputs["ssocredential"] = state ? state.ssocredential : undefined;
            resourceInputs["storefronturl"] = state ? state.storefronturl : undefined;
            resourceInputs["transparentinterception"] = state ? state.transparentinterception : undefined;
            resourceInputs["useiip"] = state ? state.useiip : undefined;
            resourceInputs["usemip"] = state ? state.usemip : undefined;
            resourceInputs["useraccounting"] = state ? state.useraccounting : undefined;
            resourceInputs["wihome"] = state ? state.wihome : undefined;
            resourceInputs["wihomeaddresstype"] = state ? state.wihomeaddresstype : undefined;
            resourceInputs["windowsautologon"] = state ? state.windowsautologon : undefined;
            resourceInputs["windowsclienttype"] = state ? state.windowsclienttype : undefined;
            resourceInputs["windowspluginupgrade"] = state ? state.windowspluginupgrade : undefined;
            resourceInputs["winsip"] = state ? state.winsip : undefined;
            resourceInputs["wiportalmode"] = state ? state.wiportalmode : undefined;
        } else {
            const args = argsOrState as VpnsessionactionArgs | undefined;
            resourceInputs["advancedclientlessvpnmode"] = args ? args.advancedclientlessvpnmode : undefined;
            resourceInputs["allowedlogingroups"] = args ? args.allowedlogingroups : undefined;
            resourceInputs["allprotocolproxy"] = args ? args.allprotocolproxy : undefined;
            resourceInputs["alwaysonprofilename"] = args ? args.alwaysonprofilename : undefined;
            resourceInputs["authorizationgroup"] = args ? args.authorizationgroup : undefined;
            resourceInputs["autoproxyurl"] = args ? args.autoproxyurl : undefined;
            resourceInputs["citrixreceiverhome"] = args ? args.citrixreceiverhome : undefined;
            resourceInputs["clientchoices"] = args ? args.clientchoices : undefined;
            resourceInputs["clientcleanupprompt"] = args ? args.clientcleanupprompt : undefined;
            resourceInputs["clientconfigurations"] = args ? args.clientconfigurations : undefined;
            resourceInputs["clientdebug"] = args ? args.clientdebug : undefined;
            resourceInputs["clientidletimeout"] = args ? args.clientidletimeout : undefined;
            resourceInputs["clientlessmodeurlencoding"] = args ? args.clientlessmodeurlencoding : undefined;
            resourceInputs["clientlesspersistentcookie"] = args ? args.clientlesspersistentcookie : undefined;
            resourceInputs["clientlessvpnmode"] = args ? args.clientlessvpnmode : undefined;
            resourceInputs["clientoptions"] = args ? args.clientoptions : undefined;
            resourceInputs["clientsecurity"] = args ? args.clientsecurity : undefined;
            resourceInputs["clientsecuritygroup"] = args ? args.clientsecuritygroup : undefined;
            resourceInputs["clientsecuritylog"] = args ? args.clientsecuritylog : undefined;
            resourceInputs["clientsecuritymessage"] = args ? args.clientsecuritymessage : undefined;
            resourceInputs["defaultauthorizationaction"] = args ? args.defaultauthorizationaction : undefined;
            resourceInputs["dnsvservername"] = args ? args.dnsvservername : undefined;
            resourceInputs["emailhome"] = args ? args.emailhome : undefined;
            resourceInputs["epaclienttype"] = args ? args.epaclienttype : undefined;
            resourceInputs["forcecleanups"] = args ? args.forcecleanups : undefined;
            resourceInputs["forcedtimeout"] = args ? args.forcedtimeout : undefined;
            resourceInputs["forcedtimeoutwarning"] = args ? args.forcedtimeoutwarning : undefined;
            resourceInputs["fqdnspoofedip"] = args ? args.fqdnspoofedip : undefined;
            resourceInputs["ftpproxy"] = args ? args.ftpproxy : undefined;
            resourceInputs["gopherproxy"] = args ? args.gopherproxy : undefined;
            resourceInputs["homepage"] = args ? args.homepage : undefined;
            resourceInputs["httpports"] = args ? args.httpports : undefined;
            resourceInputs["httpproxy"] = args ? args.httpproxy : undefined;
            resourceInputs["icaproxy"] = args ? args.icaproxy : undefined;
            resourceInputs["iconwithreceiver"] = args ? args.iconwithreceiver : undefined;
            resourceInputs["iipdnssuffix"] = args ? args.iipdnssuffix : undefined;
            resourceInputs["kcdaccount"] = args ? args.kcdaccount : undefined;
            resourceInputs["killconnections"] = args ? args.killconnections : undefined;
            resourceInputs["linuxpluginupgrade"] = args ? args.linuxpluginupgrade : undefined;
            resourceInputs["locallanaccess"] = args ? args.locallanaccess : undefined;
            resourceInputs["loginscript"] = args ? args.loginscript : undefined;
            resourceInputs["logoutscript"] = args ? args.logoutscript : undefined;
            resourceInputs["macpluginupgrade"] = args ? args.macpluginupgrade : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["netmask"] = args ? args.netmask : undefined;
            resourceInputs["ntdomain"] = args ? args.ntdomain : undefined;
            resourceInputs["pcoipprofilename"] = args ? args.pcoipprofilename : undefined;
            resourceInputs["proxy"] = args ? args.proxy : undefined;
            resourceInputs["proxyexception"] = args ? args.proxyexception : undefined;
            resourceInputs["proxylocalbypass"] = args ? args.proxylocalbypass : undefined;
            resourceInputs["rdpclientprofilename"] = args ? args.rdpclientprofilename : undefined;
            resourceInputs["rfc1918"] = args ? args.rfc1918 : undefined;
            resourceInputs["securebrowse"] = args ? args.securebrowse : undefined;
            resourceInputs["sesstimeout"] = args ? args.sesstimeout : undefined;
            resourceInputs["sfgatewayauthtype"] = args ? args.sfgatewayauthtype : undefined;
            resourceInputs["smartgroup"] = args ? args.smartgroup : undefined;
            resourceInputs["socksproxy"] = args ? args.socksproxy : undefined;
            resourceInputs["splitdns"] = args ? args.splitdns : undefined;
            resourceInputs["splittunnel"] = args ? args.splittunnel : undefined;
            resourceInputs["spoofiip"] = args ? args.spoofiip : undefined;
            resourceInputs["sslproxy"] = args ? args.sslproxy : undefined;
            resourceInputs["sso"] = args ? args.sso : undefined;
            resourceInputs["ssocredential"] = args ? args.ssocredential : undefined;
            resourceInputs["storefronturl"] = args ? args.storefronturl : undefined;
            resourceInputs["transparentinterception"] = args ? args.transparentinterception : undefined;
            resourceInputs["useiip"] = args ? args.useiip : undefined;
            resourceInputs["usemip"] = args ? args.usemip : undefined;
            resourceInputs["useraccounting"] = args ? args.useraccounting : undefined;
            resourceInputs["wihome"] = args ? args.wihome : undefined;
            resourceInputs["wihomeaddresstype"] = args ? args.wihomeaddresstype : undefined;
            resourceInputs["windowsautologon"] = args ? args.windowsautologon : undefined;
            resourceInputs["windowsclienttype"] = args ? args.windowsclienttype : undefined;
            resourceInputs["windowspluginupgrade"] = args ? args.windowspluginupgrade : undefined;
            resourceInputs["winsip"] = args ? args.winsip : undefined;
            resourceInputs["wiportalmode"] = args ? args.wiportalmode : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Vpnsessionaction.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Vpnsessionaction resources.
 */
export interface VpnsessionactionState {
    advancedclientlessvpnmode?: pulumi.Input<string>;
    allowedlogingroups?: pulumi.Input<string>;
    allprotocolproxy?: pulumi.Input<string>;
    alwaysonprofilename?: pulumi.Input<string>;
    authorizationgroup?: pulumi.Input<string>;
    autoproxyurl?: pulumi.Input<string>;
    citrixreceiverhome?: pulumi.Input<string>;
    clientchoices?: pulumi.Input<string>;
    clientcleanupprompt?: pulumi.Input<string>;
    clientconfigurations?: pulumi.Input<pulumi.Input<string>[]>;
    clientdebug?: pulumi.Input<string>;
    clientidletimeout?: pulumi.Input<number>;
    clientlessmodeurlencoding?: pulumi.Input<string>;
    clientlesspersistentcookie?: pulumi.Input<string>;
    clientlessvpnmode?: pulumi.Input<string>;
    clientoptions?: pulumi.Input<string>;
    clientsecurity?: pulumi.Input<string>;
    clientsecuritygroup?: pulumi.Input<string>;
    clientsecuritylog?: pulumi.Input<string>;
    clientsecuritymessage?: pulumi.Input<string>;
    defaultauthorizationaction?: pulumi.Input<string>;
    dnsvservername?: pulumi.Input<string>;
    emailhome?: pulumi.Input<string>;
    epaclienttype?: pulumi.Input<string>;
    forcecleanups?: pulumi.Input<pulumi.Input<string>[]>;
    forcedtimeout?: pulumi.Input<number>;
    forcedtimeoutwarning?: pulumi.Input<number>;
    fqdnspoofedip?: pulumi.Input<string>;
    ftpproxy?: pulumi.Input<string>;
    gopherproxy?: pulumi.Input<string>;
    homepage?: pulumi.Input<string>;
    httpports?: pulumi.Input<pulumi.Input<number>[]>;
    httpproxy?: pulumi.Input<string>;
    icaproxy?: pulumi.Input<string>;
    iconwithreceiver?: pulumi.Input<string>;
    iipdnssuffix?: pulumi.Input<string>;
    kcdaccount?: pulumi.Input<string>;
    killconnections?: pulumi.Input<string>;
    linuxpluginupgrade?: pulumi.Input<string>;
    locallanaccess?: pulumi.Input<string>;
    loginscript?: pulumi.Input<string>;
    logoutscript?: pulumi.Input<string>;
    macpluginupgrade?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    netmask?: pulumi.Input<string>;
    ntdomain?: pulumi.Input<string>;
    pcoipprofilename?: pulumi.Input<string>;
    proxy?: pulumi.Input<string>;
    proxyexception?: pulumi.Input<string>;
    proxylocalbypass?: pulumi.Input<string>;
    rdpclientprofilename?: pulumi.Input<string>;
    rfc1918?: pulumi.Input<string>;
    securebrowse?: pulumi.Input<string>;
    sesstimeout?: pulumi.Input<number>;
    sfgatewayauthtype?: pulumi.Input<string>;
    smartgroup?: pulumi.Input<string>;
    socksproxy?: pulumi.Input<string>;
    splitdns?: pulumi.Input<string>;
    splittunnel?: pulumi.Input<string>;
    spoofiip?: pulumi.Input<string>;
    sslproxy?: pulumi.Input<string>;
    sso?: pulumi.Input<string>;
    ssocredential?: pulumi.Input<string>;
    storefronturl?: pulumi.Input<string>;
    transparentinterception?: pulumi.Input<string>;
    useiip?: pulumi.Input<string>;
    usemip?: pulumi.Input<string>;
    useraccounting?: pulumi.Input<string>;
    wihome?: pulumi.Input<string>;
    wihomeaddresstype?: pulumi.Input<string>;
    windowsautologon?: pulumi.Input<string>;
    windowsclienttype?: pulumi.Input<string>;
    windowspluginupgrade?: pulumi.Input<string>;
    winsip?: pulumi.Input<string>;
    wiportalmode?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Vpnsessionaction resource.
 */
export interface VpnsessionactionArgs {
    advancedclientlessvpnmode?: pulumi.Input<string>;
    allowedlogingroups?: pulumi.Input<string>;
    allprotocolproxy?: pulumi.Input<string>;
    alwaysonprofilename?: pulumi.Input<string>;
    authorizationgroup?: pulumi.Input<string>;
    autoproxyurl?: pulumi.Input<string>;
    citrixreceiverhome?: pulumi.Input<string>;
    clientchoices?: pulumi.Input<string>;
    clientcleanupprompt?: pulumi.Input<string>;
    clientconfigurations?: pulumi.Input<pulumi.Input<string>[]>;
    clientdebug?: pulumi.Input<string>;
    clientidletimeout?: pulumi.Input<number>;
    clientlessmodeurlencoding?: pulumi.Input<string>;
    clientlesspersistentcookie?: pulumi.Input<string>;
    clientlessvpnmode?: pulumi.Input<string>;
    clientoptions?: pulumi.Input<string>;
    clientsecurity?: pulumi.Input<string>;
    clientsecuritygroup?: pulumi.Input<string>;
    clientsecuritylog?: pulumi.Input<string>;
    clientsecuritymessage?: pulumi.Input<string>;
    defaultauthorizationaction?: pulumi.Input<string>;
    dnsvservername?: pulumi.Input<string>;
    emailhome?: pulumi.Input<string>;
    epaclienttype?: pulumi.Input<string>;
    forcecleanups?: pulumi.Input<pulumi.Input<string>[]>;
    forcedtimeout?: pulumi.Input<number>;
    forcedtimeoutwarning?: pulumi.Input<number>;
    fqdnspoofedip?: pulumi.Input<string>;
    ftpproxy?: pulumi.Input<string>;
    gopherproxy?: pulumi.Input<string>;
    homepage?: pulumi.Input<string>;
    httpports?: pulumi.Input<pulumi.Input<number>[]>;
    httpproxy?: pulumi.Input<string>;
    icaproxy?: pulumi.Input<string>;
    iconwithreceiver?: pulumi.Input<string>;
    iipdnssuffix?: pulumi.Input<string>;
    kcdaccount?: pulumi.Input<string>;
    killconnections?: pulumi.Input<string>;
    linuxpluginupgrade?: pulumi.Input<string>;
    locallanaccess?: pulumi.Input<string>;
    loginscript?: pulumi.Input<string>;
    logoutscript?: pulumi.Input<string>;
    macpluginupgrade?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    netmask?: pulumi.Input<string>;
    ntdomain?: pulumi.Input<string>;
    pcoipprofilename?: pulumi.Input<string>;
    proxy?: pulumi.Input<string>;
    proxyexception?: pulumi.Input<string>;
    proxylocalbypass?: pulumi.Input<string>;
    rdpclientprofilename?: pulumi.Input<string>;
    rfc1918?: pulumi.Input<string>;
    securebrowse?: pulumi.Input<string>;
    sesstimeout?: pulumi.Input<number>;
    sfgatewayauthtype?: pulumi.Input<string>;
    smartgroup?: pulumi.Input<string>;
    socksproxy?: pulumi.Input<string>;
    splitdns?: pulumi.Input<string>;
    splittunnel?: pulumi.Input<string>;
    spoofiip?: pulumi.Input<string>;
    sslproxy?: pulumi.Input<string>;
    sso?: pulumi.Input<string>;
    ssocredential?: pulumi.Input<string>;
    storefronturl?: pulumi.Input<string>;
    transparentinterception?: pulumi.Input<string>;
    useiip?: pulumi.Input<string>;
    usemip?: pulumi.Input<string>;
    useraccounting?: pulumi.Input<string>;
    wihome?: pulumi.Input<string>;
    wihomeaddresstype?: pulumi.Input<string>;
    windowsautologon?: pulumi.Input<string>;
    windowsclienttype?: pulumi.Input<string>;
    windowspluginupgrade?: pulumi.Input<string>;
    winsip?: pulumi.Input<string>;
    wiportalmode?: pulumi.Input<string>;
}
