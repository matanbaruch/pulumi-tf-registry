// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class IdentityOidcKeyAllowedClientId extends pulumi.CustomResource {
    /**
     * Get an existing IdentityOidcKeyAllowedClientId resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IdentityOidcKeyAllowedClientIdState, opts?: pulumi.CustomResourceOptions): IdentityOidcKeyAllowedClientId {
        return new IdentityOidcKeyAllowedClientId(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'vault:index/identityOidcKeyAllowedClientId:IdentityOidcKeyAllowedClientId';

    /**
     * Returns true if the given object is an instance of IdentityOidcKeyAllowedClientId.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IdentityOidcKeyAllowedClientId {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IdentityOidcKeyAllowedClientId.__pulumiType;
    }

    /**
     * Role Client ID allowed to use the key for signing.
     */
    public readonly allowedClientId!: pulumi.Output<string>;
    /**
     * Name of the key.
     */
    public readonly keyName!: pulumi.Output<string>;
    /**
     * Target namespace. (requires Enterprise)
     */
    public readonly namespace!: pulumi.Output<string | undefined>;

    /**
     * Create a IdentityOidcKeyAllowedClientId resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IdentityOidcKeyAllowedClientIdArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IdentityOidcKeyAllowedClientIdArgs | IdentityOidcKeyAllowedClientIdState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IdentityOidcKeyAllowedClientIdState | undefined;
            resourceInputs["allowedClientId"] = state ? state.allowedClientId : undefined;
            resourceInputs["keyName"] = state ? state.keyName : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
        } else {
            const args = argsOrState as IdentityOidcKeyAllowedClientIdArgs | undefined;
            if ((!args || args.allowedClientId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'allowedClientId'");
            }
            if ((!args || args.keyName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'keyName'");
            }
            resourceInputs["allowedClientId"] = args ? args.allowedClientId : undefined;
            resourceInputs["keyName"] = args ? args.keyName : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IdentityOidcKeyAllowedClientId.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IdentityOidcKeyAllowedClientId resources.
 */
export interface IdentityOidcKeyAllowedClientIdState {
    /**
     * Role Client ID allowed to use the key for signing.
     */
    allowedClientId?: pulumi.Input<string>;
    /**
     * Name of the key.
     */
    keyName?: pulumi.Input<string>;
    /**
     * Target namespace. (requires Enterprise)
     */
    namespace?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IdentityOidcKeyAllowedClientId resource.
 */
export interface IdentityOidcKeyAllowedClientIdArgs {
    /**
     * Role Client ID allowed to use the key for signing.
     */
    allowedClientId: pulumi.Input<string>;
    /**
     * Name of the key.
     */
    keyName: pulumi.Input<string>;
    /**
     * Target namespace. (requires Enterprise)
     */
    namespace?: pulumi.Input<string>;
}
