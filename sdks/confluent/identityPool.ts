// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IdentityPool extends pulumi.CustomResource {
    /**
     * Get an existing IdentityPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IdentityPoolState, opts?: pulumi.CustomResourceOptions): IdentityPool {
        return new IdentityPool(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'confluent:index/identityPool:IdentityPool';

    /**
     * Returns true if the given object is an instance of IdentityPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IdentityPool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IdentityPool.__pulumiType;
    }

    /**
     * A description of the Identity Pool.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * A name for the Identity Pool.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * A filter expression that must be evaluated to be true to use this identity pool.
     */
    public readonly filter!: pulumi.Output<string>;
    /**
     * A JWT claim to extract the authenticating principal to Confluent resources.
     */
    public readonly identityClaim!: pulumi.Output<string>;
    /**
     * Identity Provider objects represent external OAuth/OpenID Connect providers within Confluent Cloud.
     */
    public readonly identityProvider!: pulumi.Output<outputs.IdentityPoolIdentityProvider>;

    /**
     * Create a IdentityPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IdentityPoolArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IdentityPoolArgs | IdentityPoolState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IdentityPoolState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["filter"] = state ? state.filter : undefined;
            resourceInputs["identityClaim"] = state ? state.identityClaim : undefined;
            resourceInputs["identityProvider"] = state ? state.identityProvider : undefined;
        } else {
            const args = argsOrState as IdentityPoolArgs | undefined;
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.filter === undefined) && !opts.urn) {
                throw new Error("Missing required property 'filter'");
            }
            if ((!args || args.identityClaim === undefined) && !opts.urn) {
                throw new Error("Missing required property 'identityClaim'");
            }
            if ((!args || args.identityProvider === undefined) && !opts.urn) {
                throw new Error("Missing required property 'identityProvider'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["filter"] = args ? args.filter : undefined;
            resourceInputs["identityClaim"] = args ? args.identityClaim : undefined;
            resourceInputs["identityProvider"] = args ? args.identityProvider : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IdentityPool.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IdentityPool resources.
 */
export interface IdentityPoolState {
    /**
     * A description of the Identity Pool.
     */
    description?: pulumi.Input<string>;
    /**
     * A name for the Identity Pool.
     */
    displayName?: pulumi.Input<string>;
    /**
     * A filter expression that must be evaluated to be true to use this identity pool.
     */
    filter?: pulumi.Input<string>;
    /**
     * A JWT claim to extract the authenticating principal to Confluent resources.
     */
    identityClaim?: pulumi.Input<string>;
    /**
     * Identity Provider objects represent external OAuth/OpenID Connect providers within Confluent Cloud.
     */
    identityProvider?: pulumi.Input<inputs.IdentityPoolIdentityProvider>;
}

/**
 * The set of arguments for constructing a IdentityPool resource.
 */
export interface IdentityPoolArgs {
    /**
     * A description of the Identity Pool.
     */
    description: pulumi.Input<string>;
    /**
     * A name for the Identity Pool.
     */
    displayName: pulumi.Input<string>;
    /**
     * A filter expression that must be evaluated to be true to use this identity pool.
     */
    filter: pulumi.Input<string>;
    /**
     * A JWT claim to extract the authenticating principal to Confluent resources.
     */
    identityClaim: pulumi.Input<string>;
    /**
     * Identity Provider objects represent external OAuth/OpenID Connect providers within Confluent Cloud.
     */
    identityProvider: pulumi.Input<inputs.IdentityPoolIdentityProvider>;
}
