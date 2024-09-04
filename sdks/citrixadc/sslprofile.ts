// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Sslprofile extends pulumi.CustomResource {
    /**
     * Get an existing Sslprofile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SslprofileState, opts?: pulumi.CustomResourceOptions): Sslprofile {
        return new Sslprofile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/sslprofile:Sslprofile';

    /**
     * Returns true if the given object is an instance of Sslprofile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Sslprofile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Sslprofile.__pulumiType;
    }

    public readonly alpnprotocol!: pulumi.Output<string>;
    public readonly cipherbindings!: pulumi.Output<outputs.SslprofileCipherbinding[] | undefined>;
    public readonly ciphername!: pulumi.Output<string>;
    public readonly cipherpriority!: pulumi.Output<number>;
    public readonly cipherredirect!: pulumi.Output<string>;
    public readonly cipherurl!: pulumi.Output<string>;
    public readonly cleartextport!: pulumi.Output<number>;
    public readonly clientauth!: pulumi.Output<string>;
    public readonly clientauthuseboundcachain!: pulumi.Output<string>;
    public readonly clientcert!: pulumi.Output<string>;
    public readonly commonname!: pulumi.Output<string>;
    public readonly denysslreneg!: pulumi.Output<string>;
    public readonly dh!: pulumi.Output<string>;
    public readonly dhcount!: pulumi.Output<number>;
    public readonly dhekeyexchangewithpsk!: pulumi.Output<string>;
    public readonly dhfile!: pulumi.Output<string>;
    public readonly dhkeyexpsizelimit!: pulumi.Output<string>;
    public readonly dropreqwithnohostheader!: pulumi.Output<string>;
    public readonly ecccurvebindings!: pulumi.Output<string[] | undefined>;
    public readonly encrypttriggerpktcount!: pulumi.Output<number>;
    public readonly ersa!: pulumi.Output<string>;
    public readonly ersacount!: pulumi.Output<number>;
    public readonly hsts!: pulumi.Output<string>;
    public readonly includesubdomains!: pulumi.Output<string>;
    public readonly insertionencoding!: pulumi.Output<string>;
    public readonly maxage!: pulumi.Output<number>;
    public readonly name!: pulumi.Output<string>;
    public readonly ocspstapling!: pulumi.Output<string>;
    public readonly preload!: pulumi.Output<string>;
    public readonly prevsessionkeylifetime!: pulumi.Output<number>;
    public readonly pushenctrigger!: pulumi.Output<string>;
    public readonly pushenctriggertimeout!: pulumi.Output<number>;
    public readonly pushflag!: pulumi.Output<number>;
    public readonly quantumsize!: pulumi.Output<string>;
    public readonly redirectportrewrite!: pulumi.Output<string>;
    public readonly sendclosenotify!: pulumi.Output<string>;
    public readonly serverauth!: pulumi.Output<string>;
    public readonly sessionkeylifetime!: pulumi.Output<number>;
    public readonly sessionticket!: pulumi.Output<string>;
    public readonly sessionticketkeydata!: pulumi.Output<string>;
    public readonly sessionticketkeyrefresh!: pulumi.Output<string>;
    public readonly sessionticketlifetime!: pulumi.Output<number>;
    public readonly sessreuse!: pulumi.Output<string>;
    public readonly sesstimeout!: pulumi.Output<number>;
    public readonly skipclientcertpolicycheck!: pulumi.Output<string>;
    public readonly snienable!: pulumi.Output<string>;
    public readonly snihttphostmatch!: pulumi.Output<string>;
    public readonly ssl3!: pulumi.Output<string>;
    public readonly sslimaxsessperserver!: pulumi.Output<number>;
    public readonly sslinterception!: pulumi.Output<string>;
    public readonly ssliocspcheck!: pulumi.Output<string>;
    public readonly sslireneg!: pulumi.Output<string>;
    public readonly ssllogprofile!: pulumi.Output<string>;
    public readonly sslprofiletype!: pulumi.Output<string>;
    public readonly sslredirect!: pulumi.Output<string>;
    public readonly ssltriggertimeout!: pulumi.Output<number>;
    public readonly strictcachecks!: pulumi.Output<string>;
    public readonly strictsigdigestcheck!: pulumi.Output<string>;
    public readonly tls1!: pulumi.Output<string>;
    public readonly tls11!: pulumi.Output<string>;
    public readonly tls12!: pulumi.Output<string>;
    public readonly tls13!: pulumi.Output<string>;
    public readonly tls13sessionticketsperauthcontext!: pulumi.Output<number>;
    public readonly zerorttearlydata!: pulumi.Output<string>;

    /**
     * Create a Sslprofile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SslprofileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SslprofileArgs | SslprofileState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SslprofileState | undefined;
            resourceInputs["alpnprotocol"] = state ? state.alpnprotocol : undefined;
            resourceInputs["cipherbindings"] = state ? state.cipherbindings : undefined;
            resourceInputs["ciphername"] = state ? state.ciphername : undefined;
            resourceInputs["cipherpriority"] = state ? state.cipherpriority : undefined;
            resourceInputs["cipherredirect"] = state ? state.cipherredirect : undefined;
            resourceInputs["cipherurl"] = state ? state.cipherurl : undefined;
            resourceInputs["cleartextport"] = state ? state.cleartextport : undefined;
            resourceInputs["clientauth"] = state ? state.clientauth : undefined;
            resourceInputs["clientauthuseboundcachain"] = state ? state.clientauthuseboundcachain : undefined;
            resourceInputs["clientcert"] = state ? state.clientcert : undefined;
            resourceInputs["commonname"] = state ? state.commonname : undefined;
            resourceInputs["denysslreneg"] = state ? state.denysslreneg : undefined;
            resourceInputs["dh"] = state ? state.dh : undefined;
            resourceInputs["dhcount"] = state ? state.dhcount : undefined;
            resourceInputs["dhekeyexchangewithpsk"] = state ? state.dhekeyexchangewithpsk : undefined;
            resourceInputs["dhfile"] = state ? state.dhfile : undefined;
            resourceInputs["dhkeyexpsizelimit"] = state ? state.dhkeyexpsizelimit : undefined;
            resourceInputs["dropreqwithnohostheader"] = state ? state.dropreqwithnohostheader : undefined;
            resourceInputs["ecccurvebindings"] = state ? state.ecccurvebindings : undefined;
            resourceInputs["encrypttriggerpktcount"] = state ? state.encrypttriggerpktcount : undefined;
            resourceInputs["ersa"] = state ? state.ersa : undefined;
            resourceInputs["ersacount"] = state ? state.ersacount : undefined;
            resourceInputs["hsts"] = state ? state.hsts : undefined;
            resourceInputs["includesubdomains"] = state ? state.includesubdomains : undefined;
            resourceInputs["insertionencoding"] = state ? state.insertionencoding : undefined;
            resourceInputs["maxage"] = state ? state.maxage : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["ocspstapling"] = state ? state.ocspstapling : undefined;
            resourceInputs["preload"] = state ? state.preload : undefined;
            resourceInputs["prevsessionkeylifetime"] = state ? state.prevsessionkeylifetime : undefined;
            resourceInputs["pushenctrigger"] = state ? state.pushenctrigger : undefined;
            resourceInputs["pushenctriggertimeout"] = state ? state.pushenctriggertimeout : undefined;
            resourceInputs["pushflag"] = state ? state.pushflag : undefined;
            resourceInputs["quantumsize"] = state ? state.quantumsize : undefined;
            resourceInputs["redirectportrewrite"] = state ? state.redirectportrewrite : undefined;
            resourceInputs["sendclosenotify"] = state ? state.sendclosenotify : undefined;
            resourceInputs["serverauth"] = state ? state.serverauth : undefined;
            resourceInputs["sessionkeylifetime"] = state ? state.sessionkeylifetime : undefined;
            resourceInputs["sessionticket"] = state ? state.sessionticket : undefined;
            resourceInputs["sessionticketkeydata"] = state ? state.sessionticketkeydata : undefined;
            resourceInputs["sessionticketkeyrefresh"] = state ? state.sessionticketkeyrefresh : undefined;
            resourceInputs["sessionticketlifetime"] = state ? state.sessionticketlifetime : undefined;
            resourceInputs["sessreuse"] = state ? state.sessreuse : undefined;
            resourceInputs["sesstimeout"] = state ? state.sesstimeout : undefined;
            resourceInputs["skipclientcertpolicycheck"] = state ? state.skipclientcertpolicycheck : undefined;
            resourceInputs["snienable"] = state ? state.snienable : undefined;
            resourceInputs["snihttphostmatch"] = state ? state.snihttphostmatch : undefined;
            resourceInputs["ssl3"] = state ? state.ssl3 : undefined;
            resourceInputs["sslimaxsessperserver"] = state ? state.sslimaxsessperserver : undefined;
            resourceInputs["sslinterception"] = state ? state.sslinterception : undefined;
            resourceInputs["ssliocspcheck"] = state ? state.ssliocspcheck : undefined;
            resourceInputs["sslireneg"] = state ? state.sslireneg : undefined;
            resourceInputs["ssllogprofile"] = state ? state.ssllogprofile : undefined;
            resourceInputs["sslprofiletype"] = state ? state.sslprofiletype : undefined;
            resourceInputs["sslredirect"] = state ? state.sslredirect : undefined;
            resourceInputs["ssltriggertimeout"] = state ? state.ssltriggertimeout : undefined;
            resourceInputs["strictcachecks"] = state ? state.strictcachecks : undefined;
            resourceInputs["strictsigdigestcheck"] = state ? state.strictsigdigestcheck : undefined;
            resourceInputs["tls1"] = state ? state.tls1 : undefined;
            resourceInputs["tls11"] = state ? state.tls11 : undefined;
            resourceInputs["tls12"] = state ? state.tls12 : undefined;
            resourceInputs["tls13"] = state ? state.tls13 : undefined;
            resourceInputs["tls13sessionticketsperauthcontext"] = state ? state.tls13sessionticketsperauthcontext : undefined;
            resourceInputs["zerorttearlydata"] = state ? state.zerorttearlydata : undefined;
        } else {
            const args = argsOrState as SslprofileArgs | undefined;
            resourceInputs["alpnprotocol"] = args ? args.alpnprotocol : undefined;
            resourceInputs["cipherbindings"] = args ? args.cipherbindings : undefined;
            resourceInputs["ciphername"] = args ? args.ciphername : undefined;
            resourceInputs["cipherpriority"] = args ? args.cipherpriority : undefined;
            resourceInputs["cipherredirect"] = args ? args.cipherredirect : undefined;
            resourceInputs["cipherurl"] = args ? args.cipherurl : undefined;
            resourceInputs["cleartextport"] = args ? args.cleartextport : undefined;
            resourceInputs["clientauth"] = args ? args.clientauth : undefined;
            resourceInputs["clientauthuseboundcachain"] = args ? args.clientauthuseboundcachain : undefined;
            resourceInputs["clientcert"] = args ? args.clientcert : undefined;
            resourceInputs["commonname"] = args ? args.commonname : undefined;
            resourceInputs["denysslreneg"] = args ? args.denysslreneg : undefined;
            resourceInputs["dh"] = args ? args.dh : undefined;
            resourceInputs["dhcount"] = args ? args.dhcount : undefined;
            resourceInputs["dhekeyexchangewithpsk"] = args ? args.dhekeyexchangewithpsk : undefined;
            resourceInputs["dhfile"] = args ? args.dhfile : undefined;
            resourceInputs["dhkeyexpsizelimit"] = args ? args.dhkeyexpsizelimit : undefined;
            resourceInputs["dropreqwithnohostheader"] = args ? args.dropreqwithnohostheader : undefined;
            resourceInputs["ecccurvebindings"] = args ? args.ecccurvebindings : undefined;
            resourceInputs["encrypttriggerpktcount"] = args ? args.encrypttriggerpktcount : undefined;
            resourceInputs["ersa"] = args ? args.ersa : undefined;
            resourceInputs["ersacount"] = args ? args.ersacount : undefined;
            resourceInputs["hsts"] = args ? args.hsts : undefined;
            resourceInputs["includesubdomains"] = args ? args.includesubdomains : undefined;
            resourceInputs["insertionencoding"] = args ? args.insertionencoding : undefined;
            resourceInputs["maxage"] = args ? args.maxage : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["ocspstapling"] = args ? args.ocspstapling : undefined;
            resourceInputs["preload"] = args ? args.preload : undefined;
            resourceInputs["prevsessionkeylifetime"] = args ? args.prevsessionkeylifetime : undefined;
            resourceInputs["pushenctrigger"] = args ? args.pushenctrigger : undefined;
            resourceInputs["pushenctriggertimeout"] = args ? args.pushenctriggertimeout : undefined;
            resourceInputs["pushflag"] = args ? args.pushflag : undefined;
            resourceInputs["quantumsize"] = args ? args.quantumsize : undefined;
            resourceInputs["redirectportrewrite"] = args ? args.redirectportrewrite : undefined;
            resourceInputs["sendclosenotify"] = args ? args.sendclosenotify : undefined;
            resourceInputs["serverauth"] = args ? args.serverauth : undefined;
            resourceInputs["sessionkeylifetime"] = args ? args.sessionkeylifetime : undefined;
            resourceInputs["sessionticket"] = args ? args.sessionticket : undefined;
            resourceInputs["sessionticketkeydata"] = args ? args.sessionticketkeydata : undefined;
            resourceInputs["sessionticketkeyrefresh"] = args ? args.sessionticketkeyrefresh : undefined;
            resourceInputs["sessionticketlifetime"] = args ? args.sessionticketlifetime : undefined;
            resourceInputs["sessreuse"] = args ? args.sessreuse : undefined;
            resourceInputs["sesstimeout"] = args ? args.sesstimeout : undefined;
            resourceInputs["skipclientcertpolicycheck"] = args ? args.skipclientcertpolicycheck : undefined;
            resourceInputs["snienable"] = args ? args.snienable : undefined;
            resourceInputs["snihttphostmatch"] = args ? args.snihttphostmatch : undefined;
            resourceInputs["ssl3"] = args ? args.ssl3 : undefined;
            resourceInputs["sslimaxsessperserver"] = args ? args.sslimaxsessperserver : undefined;
            resourceInputs["sslinterception"] = args ? args.sslinterception : undefined;
            resourceInputs["ssliocspcheck"] = args ? args.ssliocspcheck : undefined;
            resourceInputs["sslireneg"] = args ? args.sslireneg : undefined;
            resourceInputs["ssllogprofile"] = args ? args.ssllogprofile : undefined;
            resourceInputs["sslprofiletype"] = args ? args.sslprofiletype : undefined;
            resourceInputs["sslredirect"] = args ? args.sslredirect : undefined;
            resourceInputs["ssltriggertimeout"] = args ? args.ssltriggertimeout : undefined;
            resourceInputs["strictcachecks"] = args ? args.strictcachecks : undefined;
            resourceInputs["strictsigdigestcheck"] = args ? args.strictsigdigestcheck : undefined;
            resourceInputs["tls1"] = args ? args.tls1 : undefined;
            resourceInputs["tls11"] = args ? args.tls11 : undefined;
            resourceInputs["tls12"] = args ? args.tls12 : undefined;
            resourceInputs["tls13"] = args ? args.tls13 : undefined;
            resourceInputs["tls13sessionticketsperauthcontext"] = args ? args.tls13sessionticketsperauthcontext : undefined;
            resourceInputs["zerorttearlydata"] = args ? args.zerorttearlydata : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Sslprofile.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Sslprofile resources.
 */
export interface SslprofileState {
    alpnprotocol?: pulumi.Input<string>;
    cipherbindings?: pulumi.Input<pulumi.Input<inputs.SslprofileCipherbinding>[]>;
    ciphername?: pulumi.Input<string>;
    cipherpriority?: pulumi.Input<number>;
    cipherredirect?: pulumi.Input<string>;
    cipherurl?: pulumi.Input<string>;
    cleartextport?: pulumi.Input<number>;
    clientauth?: pulumi.Input<string>;
    clientauthuseboundcachain?: pulumi.Input<string>;
    clientcert?: pulumi.Input<string>;
    commonname?: pulumi.Input<string>;
    denysslreneg?: pulumi.Input<string>;
    dh?: pulumi.Input<string>;
    dhcount?: pulumi.Input<number>;
    dhekeyexchangewithpsk?: pulumi.Input<string>;
    dhfile?: pulumi.Input<string>;
    dhkeyexpsizelimit?: pulumi.Input<string>;
    dropreqwithnohostheader?: pulumi.Input<string>;
    ecccurvebindings?: pulumi.Input<pulumi.Input<string>[]>;
    encrypttriggerpktcount?: pulumi.Input<number>;
    ersa?: pulumi.Input<string>;
    ersacount?: pulumi.Input<number>;
    hsts?: pulumi.Input<string>;
    includesubdomains?: pulumi.Input<string>;
    insertionencoding?: pulumi.Input<string>;
    maxage?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    ocspstapling?: pulumi.Input<string>;
    preload?: pulumi.Input<string>;
    prevsessionkeylifetime?: pulumi.Input<number>;
    pushenctrigger?: pulumi.Input<string>;
    pushenctriggertimeout?: pulumi.Input<number>;
    pushflag?: pulumi.Input<number>;
    quantumsize?: pulumi.Input<string>;
    redirectportrewrite?: pulumi.Input<string>;
    sendclosenotify?: pulumi.Input<string>;
    serverauth?: pulumi.Input<string>;
    sessionkeylifetime?: pulumi.Input<number>;
    sessionticket?: pulumi.Input<string>;
    sessionticketkeydata?: pulumi.Input<string>;
    sessionticketkeyrefresh?: pulumi.Input<string>;
    sessionticketlifetime?: pulumi.Input<number>;
    sessreuse?: pulumi.Input<string>;
    sesstimeout?: pulumi.Input<number>;
    skipclientcertpolicycheck?: pulumi.Input<string>;
    snienable?: pulumi.Input<string>;
    snihttphostmatch?: pulumi.Input<string>;
    ssl3?: pulumi.Input<string>;
    sslimaxsessperserver?: pulumi.Input<number>;
    sslinterception?: pulumi.Input<string>;
    ssliocspcheck?: pulumi.Input<string>;
    sslireneg?: pulumi.Input<string>;
    ssllogprofile?: pulumi.Input<string>;
    sslprofiletype?: pulumi.Input<string>;
    sslredirect?: pulumi.Input<string>;
    ssltriggertimeout?: pulumi.Input<number>;
    strictcachecks?: pulumi.Input<string>;
    strictsigdigestcheck?: pulumi.Input<string>;
    tls1?: pulumi.Input<string>;
    tls11?: pulumi.Input<string>;
    tls12?: pulumi.Input<string>;
    tls13?: pulumi.Input<string>;
    tls13sessionticketsperauthcontext?: pulumi.Input<number>;
    zerorttearlydata?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Sslprofile resource.
 */
export interface SslprofileArgs {
    alpnprotocol?: pulumi.Input<string>;
    cipherbindings?: pulumi.Input<pulumi.Input<inputs.SslprofileCipherbinding>[]>;
    ciphername?: pulumi.Input<string>;
    cipherpriority?: pulumi.Input<number>;
    cipherredirect?: pulumi.Input<string>;
    cipherurl?: pulumi.Input<string>;
    cleartextport?: pulumi.Input<number>;
    clientauth?: pulumi.Input<string>;
    clientauthuseboundcachain?: pulumi.Input<string>;
    clientcert?: pulumi.Input<string>;
    commonname?: pulumi.Input<string>;
    denysslreneg?: pulumi.Input<string>;
    dh?: pulumi.Input<string>;
    dhcount?: pulumi.Input<number>;
    dhekeyexchangewithpsk?: pulumi.Input<string>;
    dhfile?: pulumi.Input<string>;
    dhkeyexpsizelimit?: pulumi.Input<string>;
    dropreqwithnohostheader?: pulumi.Input<string>;
    ecccurvebindings?: pulumi.Input<pulumi.Input<string>[]>;
    encrypttriggerpktcount?: pulumi.Input<number>;
    ersa?: pulumi.Input<string>;
    ersacount?: pulumi.Input<number>;
    hsts?: pulumi.Input<string>;
    includesubdomains?: pulumi.Input<string>;
    insertionencoding?: pulumi.Input<string>;
    maxage?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    ocspstapling?: pulumi.Input<string>;
    preload?: pulumi.Input<string>;
    prevsessionkeylifetime?: pulumi.Input<number>;
    pushenctrigger?: pulumi.Input<string>;
    pushenctriggertimeout?: pulumi.Input<number>;
    pushflag?: pulumi.Input<number>;
    quantumsize?: pulumi.Input<string>;
    redirectportrewrite?: pulumi.Input<string>;
    sendclosenotify?: pulumi.Input<string>;
    serverauth?: pulumi.Input<string>;
    sessionkeylifetime?: pulumi.Input<number>;
    sessionticket?: pulumi.Input<string>;
    sessionticketkeydata?: pulumi.Input<string>;
    sessionticketkeyrefresh?: pulumi.Input<string>;
    sessionticketlifetime?: pulumi.Input<number>;
    sessreuse?: pulumi.Input<string>;
    sesstimeout?: pulumi.Input<number>;
    skipclientcertpolicycheck?: pulumi.Input<string>;
    snienable?: pulumi.Input<string>;
    snihttphostmatch?: pulumi.Input<string>;
    ssl3?: pulumi.Input<string>;
    sslimaxsessperserver?: pulumi.Input<number>;
    sslinterception?: pulumi.Input<string>;
    ssliocspcheck?: pulumi.Input<string>;
    sslireneg?: pulumi.Input<string>;
    ssllogprofile?: pulumi.Input<string>;
    sslprofiletype?: pulumi.Input<string>;
    sslredirect?: pulumi.Input<string>;
    ssltriggertimeout?: pulumi.Input<number>;
    strictcachecks?: pulumi.Input<string>;
    strictsigdigestcheck?: pulumi.Input<string>;
    tls1?: pulumi.Input<string>;
    tls11?: pulumi.Input<string>;
    tls12?: pulumi.Input<string>;
    tls13?: pulumi.Input<string>;
    tls13sessionticketsperauthcontext?: pulumi.Input<number>;
    zerorttearlydata?: pulumi.Input<string>;
}
