// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AamAuthorizationPolicy extends pulumi.CustomResource {
    /**
     * Get an existing AamAuthorizationPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AamAuthorizationPolicyState, opts?: pulumi.CustomResourceOptions): AamAuthorizationPolicy {
        return new AamAuthorizationPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/aamAuthorizationPolicy:AamAuthorizationPolicy';

    /**
     * Returns true if the given object is an instance of AamAuthorizationPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AamAuthorizationPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AamAuthorizationPolicy.__pulumiType;
    }

    public readonly attributeLists!: pulumi.Output<outputs.AamAuthorizationPolicyAttributeList[] | undefined>;
    /**
     * Define attribute rule for authorization policy
     */
    public readonly attributeRule!: pulumi.Output<string | undefined>;
    /**
     * Extended search filter. EX: Check whether user belongs to a nested group. (memberOf:1.2.840.113556.1.4.1941:=$GROUP-DN)
     */
    public readonly extendedFilter!: pulumi.Output<string | undefined>;
    /**
     * This policy only provides server info for forward policy feature
     */
    public readonly forwardPolicyAuthorizeOnly!: pulumi.Output<number | undefined>;
    /**
     * Specify JWT authorization template (Specify JWT authorization template name)
     */
    public readonly jwtAuthorization!: pulumi.Output<string | undefined>;
    public readonly jwtClaimMapLists!: pulumi.Output<outputs.AamAuthorizationPolicyJwtClaimMapList[] | undefined>;
    /**
     * Specify authorization policy name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Specify a LDAP or RADIUS server for authorization (Specify a LDAP or RADIUS server name)
     */
    public readonly server!: pulumi.Output<string | undefined>;
    /**
     * Specify an authentication service group for authorization (Specify authentication service group name)
     */
    public readonly serviceGroup!: pulumi.Output<string | undefined>;
    /**
     * Customized tag
     */
    public readonly userTag!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a AamAuthorizationPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: AamAuthorizationPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AamAuthorizationPolicyArgs | AamAuthorizationPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AamAuthorizationPolicyState | undefined;
            resourceInputs["attributeLists"] = state ? state.attributeLists : undefined;
            resourceInputs["attributeRule"] = state ? state.attributeRule : undefined;
            resourceInputs["extendedFilter"] = state ? state.extendedFilter : undefined;
            resourceInputs["forwardPolicyAuthorizeOnly"] = state ? state.forwardPolicyAuthorizeOnly : undefined;
            resourceInputs["jwtAuthorization"] = state ? state.jwtAuthorization : undefined;
            resourceInputs["jwtClaimMapLists"] = state ? state.jwtClaimMapLists : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["server"] = state ? state.server : undefined;
            resourceInputs["serviceGroup"] = state ? state.serviceGroup : undefined;
            resourceInputs["userTag"] = state ? state.userTag : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as AamAuthorizationPolicyArgs | undefined;
            resourceInputs["attributeLists"] = args ? args.attributeLists : undefined;
            resourceInputs["attributeRule"] = args ? args.attributeRule : undefined;
            resourceInputs["extendedFilter"] = args ? args.extendedFilter : undefined;
            resourceInputs["forwardPolicyAuthorizeOnly"] = args ? args.forwardPolicyAuthorizeOnly : undefined;
            resourceInputs["jwtAuthorization"] = args ? args.jwtAuthorization : undefined;
            resourceInputs["jwtClaimMapLists"] = args ? args.jwtClaimMapLists : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["server"] = args ? args.server : undefined;
            resourceInputs["serviceGroup"] = args ? args.serviceGroup : undefined;
            resourceInputs["userTag"] = args ? args.userTag : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AamAuthorizationPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AamAuthorizationPolicy resources.
 */
export interface AamAuthorizationPolicyState {
    attributeLists?: pulumi.Input<pulumi.Input<inputs.AamAuthorizationPolicyAttributeList>[]>;
    /**
     * Define attribute rule for authorization policy
     */
    attributeRule?: pulumi.Input<string>;
    /**
     * Extended search filter. EX: Check whether user belongs to a nested group. (memberOf:1.2.840.113556.1.4.1941:=$GROUP-DN)
     */
    extendedFilter?: pulumi.Input<string>;
    /**
     * This policy only provides server info for forward policy feature
     */
    forwardPolicyAuthorizeOnly?: pulumi.Input<number>;
    /**
     * Specify JWT authorization template (Specify JWT authorization template name)
     */
    jwtAuthorization?: pulumi.Input<string>;
    jwtClaimMapLists?: pulumi.Input<pulumi.Input<inputs.AamAuthorizationPolicyJwtClaimMapList>[]>;
    /**
     * Specify authorization policy name
     */
    name?: pulumi.Input<string>;
    /**
     * Specify a LDAP or RADIUS server for authorization (Specify a LDAP or RADIUS server name)
     */
    server?: pulumi.Input<string>;
    /**
     * Specify an authentication service group for authorization (Specify authentication service group name)
     */
    serviceGroup?: pulumi.Input<string>;
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
 * The set of arguments for constructing a AamAuthorizationPolicy resource.
 */
export interface AamAuthorizationPolicyArgs {
    attributeLists?: pulumi.Input<pulumi.Input<inputs.AamAuthorizationPolicyAttributeList>[]>;
    /**
     * Define attribute rule for authorization policy
     */
    attributeRule?: pulumi.Input<string>;
    /**
     * Extended search filter. EX: Check whether user belongs to a nested group. (memberOf:1.2.840.113556.1.4.1941:=$GROUP-DN)
     */
    extendedFilter?: pulumi.Input<string>;
    /**
     * This policy only provides server info for forward policy feature
     */
    forwardPolicyAuthorizeOnly?: pulumi.Input<number>;
    /**
     * Specify JWT authorization template (Specify JWT authorization template name)
     */
    jwtAuthorization?: pulumi.Input<string>;
    jwtClaimMapLists?: pulumi.Input<pulumi.Input<inputs.AamAuthorizationPolicyJwtClaimMapList>[]>;
    /**
     * Specify authorization policy name
     */
    name?: pulumi.Input<string>;
    /**
     * Specify a LDAP or RADIUS server for authorization (Specify a LDAP or RADIUS server name)
     */
    server?: pulumi.Input<string>;
    /**
     * Specify an authentication service group for authorization (Specify authentication service group name)
     */
    serviceGroup?: pulumi.Input<string>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
