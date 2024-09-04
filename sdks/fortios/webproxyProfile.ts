// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class WebproxyProfile extends pulumi.CustomResource {
    /**
     * Get an existing WebproxyProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WebproxyProfileState, opts?: pulumi.CustomResourceOptions): WebproxyProfile {
        return new WebproxyProfile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortios:index/webproxyProfile:WebproxyProfile';

    /**
     * Returns true if the given object is an instance of WebproxyProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebproxyProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebproxyProfile.__pulumiType;
    }

    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly getAllTables!: pulumi.Output<string | undefined>;
    public readonly headerClientIp!: pulumi.Output<string>;
    public readonly headerFrontEndHttps!: pulumi.Output<string>;
    public readonly headerViaRequest!: pulumi.Output<string>;
    public readonly headerViaResponse!: pulumi.Output<string>;
    public readonly headerXAuthenticatedGroups!: pulumi.Output<string>;
    public readonly headerXAuthenticatedUser!: pulumi.Output<string>;
    public readonly headerXForwardedClientCert!: pulumi.Output<string>;
    public readonly headerXForwardedFor!: pulumi.Output<string>;
    public readonly headers!: pulumi.Output<outputs.WebproxyProfileHeader[] | undefined>;
    public readonly logHeaderChange!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly stripEncoding!: pulumi.Output<string>;
    public readonly vdomparam!: pulumi.Output<string>;

    /**
     * Create a WebproxyProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: WebproxyProfileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WebproxyProfileArgs | WebproxyProfileState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WebproxyProfileState | undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["getAllTables"] = state ? state.getAllTables : undefined;
            resourceInputs["headerClientIp"] = state ? state.headerClientIp : undefined;
            resourceInputs["headerFrontEndHttps"] = state ? state.headerFrontEndHttps : undefined;
            resourceInputs["headerViaRequest"] = state ? state.headerViaRequest : undefined;
            resourceInputs["headerViaResponse"] = state ? state.headerViaResponse : undefined;
            resourceInputs["headerXAuthenticatedGroups"] = state ? state.headerXAuthenticatedGroups : undefined;
            resourceInputs["headerXAuthenticatedUser"] = state ? state.headerXAuthenticatedUser : undefined;
            resourceInputs["headerXForwardedClientCert"] = state ? state.headerXForwardedClientCert : undefined;
            resourceInputs["headerXForwardedFor"] = state ? state.headerXForwardedFor : undefined;
            resourceInputs["headers"] = state ? state.headers : undefined;
            resourceInputs["logHeaderChange"] = state ? state.logHeaderChange : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["stripEncoding"] = state ? state.stripEncoding : undefined;
            resourceInputs["vdomparam"] = state ? state.vdomparam : undefined;
        } else {
            const args = argsOrState as WebproxyProfileArgs | undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["getAllTables"] = args ? args.getAllTables : undefined;
            resourceInputs["headerClientIp"] = args ? args.headerClientIp : undefined;
            resourceInputs["headerFrontEndHttps"] = args ? args.headerFrontEndHttps : undefined;
            resourceInputs["headerViaRequest"] = args ? args.headerViaRequest : undefined;
            resourceInputs["headerViaResponse"] = args ? args.headerViaResponse : undefined;
            resourceInputs["headerXAuthenticatedGroups"] = args ? args.headerXAuthenticatedGroups : undefined;
            resourceInputs["headerXAuthenticatedUser"] = args ? args.headerXAuthenticatedUser : undefined;
            resourceInputs["headerXForwardedClientCert"] = args ? args.headerXForwardedClientCert : undefined;
            resourceInputs["headerXForwardedFor"] = args ? args.headerXForwardedFor : undefined;
            resourceInputs["headers"] = args ? args.headers : undefined;
            resourceInputs["logHeaderChange"] = args ? args.logHeaderChange : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["stripEncoding"] = args ? args.stripEncoding : undefined;
            resourceInputs["vdomparam"] = args ? args.vdomparam : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WebproxyProfile.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WebproxyProfile resources.
 */
export interface WebproxyProfileState {
    dynamicSortSubtable?: pulumi.Input<string>;
    getAllTables?: pulumi.Input<string>;
    headerClientIp?: pulumi.Input<string>;
    headerFrontEndHttps?: pulumi.Input<string>;
    headerViaRequest?: pulumi.Input<string>;
    headerViaResponse?: pulumi.Input<string>;
    headerXAuthenticatedGroups?: pulumi.Input<string>;
    headerXAuthenticatedUser?: pulumi.Input<string>;
    headerXForwardedClientCert?: pulumi.Input<string>;
    headerXForwardedFor?: pulumi.Input<string>;
    headers?: pulumi.Input<pulumi.Input<inputs.WebproxyProfileHeader>[]>;
    logHeaderChange?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    stripEncoding?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a WebproxyProfile resource.
 */
export interface WebproxyProfileArgs {
    dynamicSortSubtable?: pulumi.Input<string>;
    getAllTables?: pulumi.Input<string>;
    headerClientIp?: pulumi.Input<string>;
    headerFrontEndHttps?: pulumi.Input<string>;
    headerViaRequest?: pulumi.Input<string>;
    headerViaResponse?: pulumi.Input<string>;
    headerXAuthenticatedGroups?: pulumi.Input<string>;
    headerXAuthenticatedUser?: pulumi.Input<string>;
    headerXForwardedClientCert?: pulumi.Input<string>;
    headerXForwardedFor?: pulumi.Input<string>;
    headers?: pulumi.Input<pulumi.Input<inputs.WebproxyProfileHeader>[]>;
    logHeaderChange?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    stripEncoding?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
