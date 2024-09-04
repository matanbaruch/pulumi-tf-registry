// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class AdSecretRole extends pulumi.CustomResource {
    /**
     * Get an existing AdSecretRole resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AdSecretRoleState, opts?: pulumi.CustomResourceOptions): AdSecretRole {
        return new AdSecretRole(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'vault:index/adSecretRole:AdSecretRole';

    /**
     * Returns true if the given object is an instance of AdSecretRole.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AdSecretRole {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AdSecretRole.__pulumiType;
    }

    /**
     * The mount path for the AD backend.
     */
    public readonly backend!: pulumi.Output<string>;
    /**
     * Last time Vault rotated this service account's password.
     */
    public /*out*/ readonly lastVaultRotation!: pulumi.Output<string>;
    /**
     * Target namespace. (requires Enterprise)
     */
    public readonly namespace!: pulumi.Output<string | undefined>;
    /**
     * Last time Vault set this service account's password.
     */
    public /*out*/ readonly passwordLastSet!: pulumi.Output<string>;
    /**
     * Name of the role.
     */
    public readonly role!: pulumi.Output<string>;
    /**
     * The username/logon name for the service account with which this role will be associated.
     */
    public readonly serviceAccountName!: pulumi.Output<string>;
    /**
     * In seconds, the default password time-to-live.
     */
    public readonly ttl!: pulumi.Output<number | undefined>;

    /**
     * Create a AdSecretRole resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AdSecretRoleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AdSecretRoleArgs | AdSecretRoleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AdSecretRoleState | undefined;
            resourceInputs["backend"] = state ? state.backend : undefined;
            resourceInputs["lastVaultRotation"] = state ? state.lastVaultRotation : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["passwordLastSet"] = state ? state.passwordLastSet : undefined;
            resourceInputs["role"] = state ? state.role : undefined;
            resourceInputs["serviceAccountName"] = state ? state.serviceAccountName : undefined;
            resourceInputs["ttl"] = state ? state.ttl : undefined;
        } else {
            const args = argsOrState as AdSecretRoleArgs | undefined;
            if ((!args || args.backend === undefined) && !opts.urn) {
                throw new Error("Missing required property 'backend'");
            }
            if ((!args || args.role === undefined) && !opts.urn) {
                throw new Error("Missing required property 'role'");
            }
            if ((!args || args.serviceAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceAccountName'");
            }
            resourceInputs["backend"] = args ? args.backend : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["role"] = args ? args.role : undefined;
            resourceInputs["serviceAccountName"] = args ? args.serviceAccountName : undefined;
            resourceInputs["ttl"] = args ? args.ttl : undefined;
            resourceInputs["lastVaultRotation"] = undefined /*out*/;
            resourceInputs["passwordLastSet"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AdSecretRole.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AdSecretRole resources.
 */
export interface AdSecretRoleState {
    /**
     * The mount path for the AD backend.
     */
    backend?: pulumi.Input<string>;
    /**
     * Last time Vault rotated this service account's password.
     */
    lastVaultRotation?: pulumi.Input<string>;
    /**
     * Target namespace. (requires Enterprise)
     */
    namespace?: pulumi.Input<string>;
    /**
     * Last time Vault set this service account's password.
     */
    passwordLastSet?: pulumi.Input<string>;
    /**
     * Name of the role.
     */
    role?: pulumi.Input<string>;
    /**
     * The username/logon name for the service account with which this role will be associated.
     */
    serviceAccountName?: pulumi.Input<string>;
    /**
     * In seconds, the default password time-to-live.
     */
    ttl?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a AdSecretRole resource.
 */
export interface AdSecretRoleArgs {
    /**
     * The mount path for the AD backend.
     */
    backend: pulumi.Input<string>;
    /**
     * Target namespace. (requires Enterprise)
     */
    namespace?: pulumi.Input<string>;
    /**
     * Name of the role.
     */
    role: pulumi.Input<string>;
    /**
     * The username/logon name for the service account with which this role will be associated.
     */
    serviceAccountName: pulumi.Input<string>;
    /**
     * In seconds, the default password time-to-live.
     */
    ttl?: pulumi.Input<number>;
}
