// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ResourceSecret extends pulumi.CustomResource {
    /**
     * Get an existing ResourceSecret resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ResourceSecretState, opts?: pulumi.CustomResourceOptions): ResourceSecret {
        return new ResourceSecret(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingone:index/resourceSecret:ResourceSecret';

    /**
     * Returns true if the given object is an instance of ResourceSecret.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ResourceSecret {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ResourceSecret.__pulumiType;
    }

    /**
     * The ID of the environment to generate an resource secret in. Must be a valid PingOne resource ID. This field is
     * immutable and will trigger a replace plan if changed.
     */
    public readonly environmentId!: pulumi.Output<string>;
    /**
     * An object that specifies the previous secret, when it expires, and when it was last used.
     */
    public readonly previous!: pulumi.Output<outputs.ResourceSecretPrevious | undefined>;
    public readonly regenerateTriggerValues!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The ID of the resource to generate the resource secret for. The value for `resource_id` may come from the `id` attribute
     * of the `pingone.Resource` resource or data source. Must be a valid PingOne resource ID. This field is immutable and will
     * trigger a replace plan if changed.
     */
    public readonly resourceId!: pulumi.Output<string>;
    /**
     * An auto-generated resource client secret. Possible characters are `a-z`, `A-Z`, `0-9`, `-`, `.`, `_`, `~`. The secret
     * has a minimum length of 64 characters per SHA-512 requirements when using the HS512 algorithm to sign ID tokens using
     * the secret as the key..
     */
    public /*out*/ readonly secret!: pulumi.Output<string>;

    /**
     * Create a ResourceSecret resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ResourceSecretArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ResourceSecretArgs | ResourceSecretState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ResourceSecretState | undefined;
            resourceInputs["environmentId"] = state ? state.environmentId : undefined;
            resourceInputs["previous"] = state ? state.previous : undefined;
            resourceInputs["regenerateTriggerValues"] = state ? state.regenerateTriggerValues : undefined;
            resourceInputs["resourceId"] = state ? state.resourceId : undefined;
            resourceInputs["secret"] = state ? state.secret : undefined;
        } else {
            const args = argsOrState as ResourceSecretArgs | undefined;
            if ((!args || args.environmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentId'");
            }
            if ((!args || args.resourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceId'");
            }
            resourceInputs["environmentId"] = args ? args.environmentId : undefined;
            resourceInputs["previous"] = args ? args.previous : undefined;
            resourceInputs["regenerateTriggerValues"] = args ? args.regenerateTriggerValues : undefined;
            resourceInputs["resourceId"] = args ? args.resourceId : undefined;
            resourceInputs["secret"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["secret"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(ResourceSecret.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ResourceSecret resources.
 */
export interface ResourceSecretState {
    /**
     * The ID of the environment to generate an resource secret in. Must be a valid PingOne resource ID. This field is
     * immutable and will trigger a replace plan if changed.
     */
    environmentId?: pulumi.Input<string>;
    /**
     * An object that specifies the previous secret, when it expires, and when it was last used.
     */
    previous?: pulumi.Input<inputs.ResourceSecretPrevious>;
    regenerateTriggerValues?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The ID of the resource to generate the resource secret for. The value for `resource_id` may come from the `id` attribute
     * of the `pingone.Resource` resource or data source. Must be a valid PingOne resource ID. This field is immutable and will
     * trigger a replace plan if changed.
     */
    resourceId?: pulumi.Input<string>;
    /**
     * An auto-generated resource client secret. Possible characters are `a-z`, `A-Z`, `0-9`, `-`, `.`, `_`, `~`. The secret
     * has a minimum length of 64 characters per SHA-512 requirements when using the HS512 algorithm to sign ID tokens using
     * the secret as the key..
     */
    secret?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ResourceSecret resource.
 */
export interface ResourceSecretArgs {
    /**
     * The ID of the environment to generate an resource secret in. Must be a valid PingOne resource ID. This field is
     * immutable and will trigger a replace plan if changed.
     */
    environmentId: pulumi.Input<string>;
    /**
     * An object that specifies the previous secret, when it expires, and when it was last used.
     */
    previous?: pulumi.Input<inputs.ResourceSecretPrevious>;
    regenerateTriggerValues?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The ID of the resource to generate the resource secret for. The value for `resource_id` may come from the `id` attribute
     * of the `pingone.Resource` resource or data source. Must be a valid PingOne resource ID. This field is immutable and will
     * trigger a replace plan if changed.
     */
    resourceId: pulumi.Input<string>;
}
