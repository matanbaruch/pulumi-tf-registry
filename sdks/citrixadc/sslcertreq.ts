// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Sslcertreq extends pulumi.CustomResource {
    /**
     * Get an existing Sslcertreq resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SslcertreqState, opts?: pulumi.CustomResourceOptions): Sslcertreq {
        return new Sslcertreq(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/sslcertreq:Sslcertreq';

    /**
     * Returns true if the given object is an instance of Sslcertreq.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Sslcertreq {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Sslcertreq.__pulumiType;
    }

    public readonly challengepassword!: pulumi.Output<string>;
    public readonly commonname!: pulumi.Output<string>;
    public readonly companyname!: pulumi.Output<string>;
    public readonly countryname!: pulumi.Output<string>;
    public readonly digestmethod!: pulumi.Output<string>;
    public readonly emailaddress!: pulumi.Output<string>;
    public readonly fipskeyname!: pulumi.Output<string>;
    public readonly keyfile!: pulumi.Output<string>;
    public readonly keyform!: pulumi.Output<string>;
    public readonly localityname!: pulumi.Output<string>;
    public readonly organizationname!: pulumi.Output<string>;
    public readonly organizationunitname!: pulumi.Output<string>;
    public readonly pempassphrase!: pulumi.Output<string>;
    public readonly reqfile!: pulumi.Output<string>;
    public readonly statename!: pulumi.Output<string>;
    public readonly subjectaltname!: pulumi.Output<string>;

    /**
     * Create a Sslcertreq resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SslcertreqArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SslcertreqArgs | SslcertreqState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SslcertreqState | undefined;
            resourceInputs["challengepassword"] = state ? state.challengepassword : undefined;
            resourceInputs["commonname"] = state ? state.commonname : undefined;
            resourceInputs["companyname"] = state ? state.companyname : undefined;
            resourceInputs["countryname"] = state ? state.countryname : undefined;
            resourceInputs["digestmethod"] = state ? state.digestmethod : undefined;
            resourceInputs["emailaddress"] = state ? state.emailaddress : undefined;
            resourceInputs["fipskeyname"] = state ? state.fipskeyname : undefined;
            resourceInputs["keyfile"] = state ? state.keyfile : undefined;
            resourceInputs["keyform"] = state ? state.keyform : undefined;
            resourceInputs["localityname"] = state ? state.localityname : undefined;
            resourceInputs["organizationname"] = state ? state.organizationname : undefined;
            resourceInputs["organizationunitname"] = state ? state.organizationunitname : undefined;
            resourceInputs["pempassphrase"] = state ? state.pempassphrase : undefined;
            resourceInputs["reqfile"] = state ? state.reqfile : undefined;
            resourceInputs["statename"] = state ? state.statename : undefined;
            resourceInputs["subjectaltname"] = state ? state.subjectaltname : undefined;
        } else {
            const args = argsOrState as SslcertreqArgs | undefined;
            if ((!args || args.countryname === undefined) && !opts.urn) {
                throw new Error("Missing required property 'countryname'");
            }
            if ((!args || args.organizationname === undefined) && !opts.urn) {
                throw new Error("Missing required property 'organizationname'");
            }
            if ((!args || args.reqfile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'reqfile'");
            }
            if ((!args || args.statename === undefined) && !opts.urn) {
                throw new Error("Missing required property 'statename'");
            }
            resourceInputs["challengepassword"] = args ? args.challengepassword : undefined;
            resourceInputs["commonname"] = args ? args.commonname : undefined;
            resourceInputs["companyname"] = args ? args.companyname : undefined;
            resourceInputs["countryname"] = args ? args.countryname : undefined;
            resourceInputs["digestmethod"] = args ? args.digestmethod : undefined;
            resourceInputs["emailaddress"] = args ? args.emailaddress : undefined;
            resourceInputs["fipskeyname"] = args ? args.fipskeyname : undefined;
            resourceInputs["keyfile"] = args ? args.keyfile : undefined;
            resourceInputs["keyform"] = args ? args.keyform : undefined;
            resourceInputs["localityname"] = args ? args.localityname : undefined;
            resourceInputs["organizationname"] = args ? args.organizationname : undefined;
            resourceInputs["organizationunitname"] = args ? args.organizationunitname : undefined;
            resourceInputs["pempassphrase"] = args ? args.pempassphrase : undefined;
            resourceInputs["reqfile"] = args ? args.reqfile : undefined;
            resourceInputs["statename"] = args ? args.statename : undefined;
            resourceInputs["subjectaltname"] = args ? args.subjectaltname : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Sslcertreq.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Sslcertreq resources.
 */
export interface SslcertreqState {
    challengepassword?: pulumi.Input<string>;
    commonname?: pulumi.Input<string>;
    companyname?: pulumi.Input<string>;
    countryname?: pulumi.Input<string>;
    digestmethod?: pulumi.Input<string>;
    emailaddress?: pulumi.Input<string>;
    fipskeyname?: pulumi.Input<string>;
    keyfile?: pulumi.Input<string>;
    keyform?: pulumi.Input<string>;
    localityname?: pulumi.Input<string>;
    organizationname?: pulumi.Input<string>;
    organizationunitname?: pulumi.Input<string>;
    pempassphrase?: pulumi.Input<string>;
    reqfile?: pulumi.Input<string>;
    statename?: pulumi.Input<string>;
    subjectaltname?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Sslcertreq resource.
 */
export interface SslcertreqArgs {
    challengepassword?: pulumi.Input<string>;
    commonname?: pulumi.Input<string>;
    companyname?: pulumi.Input<string>;
    countryname: pulumi.Input<string>;
    digestmethod?: pulumi.Input<string>;
    emailaddress?: pulumi.Input<string>;
    fipskeyname?: pulumi.Input<string>;
    keyfile?: pulumi.Input<string>;
    keyform?: pulumi.Input<string>;
    localityname?: pulumi.Input<string>;
    organizationname: pulumi.Input<string>;
    organizationunitname?: pulumi.Input<string>;
    pempassphrase?: pulumi.Input<string>;
    reqfile: pulumi.Input<string>;
    statename: pulumi.Input<string>;
    subjectaltname?: pulumi.Input<string>;
}
