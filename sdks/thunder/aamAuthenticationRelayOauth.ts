// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AamAuthenticationRelayOauth extends pulumi.CustomResource {
    /**
     * Get an existing AamAuthenticationRelayOauth resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AamAuthenticationRelayOauthState, opts?: pulumi.CustomResourceOptions): AamAuthenticationRelayOauth {
        return new AamAuthenticationRelayOauth(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/aamAuthenticationRelayOauth:AamAuthenticationRelayOauth';

    /**
     * Returns true if the given object is an instance of AamAuthenticationRelayOauth.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AamAuthenticationRelayOauth {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AamAuthenticationRelayOauth.__pulumiType;
    }

    /**
     * All URI can be relay
     */
    public readonly all!: pulumi.Output<number | undefined>;
    /**
     * 'equals': URI exactly matches the string; 'contains': URI string contains another sub string; 'starts-with': URI string
     * starts with sub string; 'ends-with': URI string ends with sub string;
     */
    public readonly matchType!: pulumi.Output<string | undefined>;
    public readonly matchUri!: pulumi.Output<string | undefined>;
    /**
     * Specify oauth authentication relay name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * 'access-token': Relay access token to backend; 'id-token': Relay JWT to backend;
     */
    public readonly relayType!: pulumi.Output<string | undefined>;
    public readonly samplingEnables!: pulumi.Output<outputs.AamAuthenticationRelayOauthSamplingEnable[] | undefined>;
    /**
     * Customized tag
     */
    public readonly userTag!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a AamAuthenticationRelayOauth resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: AamAuthenticationRelayOauthArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AamAuthenticationRelayOauthArgs | AamAuthenticationRelayOauthState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AamAuthenticationRelayOauthState | undefined;
            resourceInputs["all"] = state ? state.all : undefined;
            resourceInputs["matchType"] = state ? state.matchType : undefined;
            resourceInputs["matchUri"] = state ? state.matchUri : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["relayType"] = state ? state.relayType : undefined;
            resourceInputs["samplingEnables"] = state ? state.samplingEnables : undefined;
            resourceInputs["userTag"] = state ? state.userTag : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as AamAuthenticationRelayOauthArgs | undefined;
            resourceInputs["all"] = args ? args.all : undefined;
            resourceInputs["matchType"] = args ? args.matchType : undefined;
            resourceInputs["matchUri"] = args ? args.matchUri : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["relayType"] = args ? args.relayType : undefined;
            resourceInputs["samplingEnables"] = args ? args.samplingEnables : undefined;
            resourceInputs["userTag"] = args ? args.userTag : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AamAuthenticationRelayOauth.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AamAuthenticationRelayOauth resources.
 */
export interface AamAuthenticationRelayOauthState {
    /**
     * All URI can be relay
     */
    all?: pulumi.Input<number>;
    /**
     * 'equals': URI exactly matches the string; 'contains': URI string contains another sub string; 'starts-with': URI string
     * starts with sub string; 'ends-with': URI string ends with sub string;
     */
    matchType?: pulumi.Input<string>;
    matchUri?: pulumi.Input<string>;
    /**
     * Specify oauth authentication relay name
     */
    name?: pulumi.Input<string>;
    /**
     * 'access-token': Relay access token to backend; 'id-token': Relay JWT to backend;
     */
    relayType?: pulumi.Input<string>;
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.AamAuthenticationRelayOauthSamplingEnable>[]>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AamAuthenticationRelayOauth resource.
 */
export interface AamAuthenticationRelayOauthArgs {
    /**
     * All URI can be relay
     */
    all?: pulumi.Input<number>;
    /**
     * 'equals': URI exactly matches the string; 'contains': URI string contains another sub string; 'starts-with': URI string
     * starts with sub string; 'ends-with': URI string ends with sub string;
     */
    matchType?: pulumi.Input<string>;
    matchUri?: pulumi.Input<string>;
    /**
     * Specify oauth authentication relay name
     */
    name?: pulumi.Input<string>;
    /**
     * 'access-token': Relay access token to backend; 'id-token': Relay JWT to backend;
     */
    relayType?: pulumi.Input<string>;
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.AamAuthenticationRelayOauthSamplingEnable>[]>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
