// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ManagedObjectStorageUserPolicy extends pulumi.CustomResource {
    /**
     * Get an existing ManagedObjectStorageUserPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ManagedObjectStorageUserPolicyState, opts?: pulumi.CustomResourceOptions): ManagedObjectStorageUserPolicy {
        return new ManagedObjectStorageUserPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'upcloud:index/managedObjectStorageUserPolicy:ManagedObjectStorageUserPolicy';

    /**
     * Returns true if the given object is an instance of ManagedObjectStorageUserPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagedObjectStorageUserPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagedObjectStorageUserPolicy.__pulumiType;
    }

    /**
     * Policy name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Managed Object Storage service UUID.
     */
    public readonly serviceUuid!: pulumi.Output<string>;
    /**
     * Username.
     */
    public readonly username!: pulumi.Output<string>;

    /**
     * Create a ManagedObjectStorageUserPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagedObjectStorageUserPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ManagedObjectStorageUserPolicyArgs | ManagedObjectStorageUserPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ManagedObjectStorageUserPolicyState | undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["serviceUuid"] = state ? state.serviceUuid : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as ManagedObjectStorageUserPolicyArgs | undefined;
            if ((!args || args.serviceUuid === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceUuid'");
            }
            if ((!args || args.username === undefined) && !opts.urn) {
                throw new Error("Missing required property 'username'");
            }
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["serviceUuid"] = args ? args.serviceUuid : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ManagedObjectStorageUserPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ManagedObjectStorageUserPolicy resources.
 */
export interface ManagedObjectStorageUserPolicyState {
    /**
     * Policy name.
     */
    name?: pulumi.Input<string>;
    /**
     * Managed Object Storage service UUID.
     */
    serviceUuid?: pulumi.Input<string>;
    /**
     * Username.
     */
    username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ManagedObjectStorageUserPolicy resource.
 */
export interface ManagedObjectStorageUserPolicyArgs {
    /**
     * Policy name.
     */
    name?: pulumi.Input<string>;
    /**
     * Managed Object Storage service UUID.
     */
    serviceUuid: pulumi.Input<string>;
    /**
     * Username.
     */
    username: pulumi.Input<string>;
}
