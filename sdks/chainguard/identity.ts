// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Identity extends pulumi.CustomResource {
    /**
     * Get an existing Identity resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IdentityState, opts?: pulumi.CustomResourceOptions): Identity {
        return new Identity(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'chainguard:index/identity:Identity';

    /**
     * Returns true if the given object is an instance of Identity.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Identity {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Identity.__pulumiType;
    }

    /**
     * An identity that may be assumed by an AWS identity satisfying the following contains on its GetCallerIdentity values
     */
    public readonly awsIdentity!: pulumi.Output<outputs.IdentityAwsIdentity | undefined>;
    /**
     * An identity that may be assumed when its claims satisfy these constraints.
     */
    public readonly claimMatch!: pulumi.Output<outputs.IdentityClaimMatch | undefined>;
    /**
     * A longer description of the purpose of this identity.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The name of this identity.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The id of the group containing this identity.
     */
    public readonly parentId!: pulumi.Output<string>;
    /**
     * An identity that may be assumed by a particular Chainguard service.
     */
    public readonly servicePrincipal!: pulumi.Output<string | undefined>;
    /**
     * An identity that is verified by OIDC, with pre-registered verification keys.
     */
    public readonly static!: pulumi.Output<outputs.IdentityStatic | undefined>;

    /**
     * Create a Identity resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IdentityArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IdentityArgs | IdentityState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IdentityState | undefined;
            resourceInputs["awsIdentity"] = state ? state.awsIdentity : undefined;
            resourceInputs["claimMatch"] = state ? state.claimMatch : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["parentId"] = state ? state.parentId : undefined;
            resourceInputs["servicePrincipal"] = state ? state.servicePrincipal : undefined;
            resourceInputs["static"] = state ? state.static : undefined;
        } else {
            const args = argsOrState as IdentityArgs | undefined;
            if ((!args || args.parentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'parentId'");
            }
            resourceInputs["awsIdentity"] = args ? args.awsIdentity : undefined;
            resourceInputs["claimMatch"] = args ? args.claimMatch : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["parentId"] = args ? args.parentId : undefined;
            resourceInputs["servicePrincipal"] = args ? args.servicePrincipal : undefined;
            resourceInputs["static"] = args ? args.static : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Identity.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Identity resources.
 */
export interface IdentityState {
    /**
     * An identity that may be assumed by an AWS identity satisfying the following contains on its GetCallerIdentity values
     */
    awsIdentity?: pulumi.Input<inputs.IdentityAwsIdentity>;
    /**
     * An identity that may be assumed when its claims satisfy these constraints.
     */
    claimMatch?: pulumi.Input<inputs.IdentityClaimMatch>;
    /**
     * A longer description of the purpose of this identity.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of this identity.
     */
    name?: pulumi.Input<string>;
    /**
     * The id of the group containing this identity.
     */
    parentId?: pulumi.Input<string>;
    /**
     * An identity that may be assumed by a particular Chainguard service.
     */
    servicePrincipal?: pulumi.Input<string>;
    /**
     * An identity that is verified by OIDC, with pre-registered verification keys.
     */
    static?: pulumi.Input<inputs.IdentityStatic>;
}

/**
 * The set of arguments for constructing a Identity resource.
 */
export interface IdentityArgs {
    /**
     * An identity that may be assumed by an AWS identity satisfying the following contains on its GetCallerIdentity values
     */
    awsIdentity?: pulumi.Input<inputs.IdentityAwsIdentity>;
    /**
     * An identity that may be assumed when its claims satisfy these constraints.
     */
    claimMatch?: pulumi.Input<inputs.IdentityClaimMatch>;
    /**
     * A longer description of the purpose of this identity.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of this identity.
     */
    name?: pulumi.Input<string>;
    /**
     * The id of the group containing this identity.
     */
    parentId: pulumi.Input<string>;
    /**
     * An identity that may be assumed by a particular Chainguard service.
     */
    servicePrincipal?: pulumi.Input<string>;
    /**
     * An identity that is verified by OIDC, with pre-registered verification keys.
     */
    static?: pulumi.Input<inputs.IdentityStatic>;
}
