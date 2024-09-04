// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class KeyVaultManagedStorageAccount extends pulumi.CustomResource {
    /**
     * Get an existing KeyVaultManagedStorageAccount resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KeyVaultManagedStorageAccountState, opts?: pulumi.CustomResourceOptions): KeyVaultManagedStorageAccount {
        return new KeyVaultManagedStorageAccount(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/keyVaultManagedStorageAccount:KeyVaultManagedStorageAccount';

    /**
     * Returns true if the given object is an instance of KeyVaultManagedStorageAccount.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KeyVaultManagedStorageAccount {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KeyVaultManagedStorageAccount.__pulumiType;
    }

    public readonly keyVaultId!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly regenerateKeyAutomatically!: pulumi.Output<boolean | undefined>;
    public readonly regenerationPeriod!: pulumi.Output<string | undefined>;
    public readonly storageAccountId!: pulumi.Output<string>;
    public readonly storageAccountKey!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.KeyVaultManagedStorageAccountTimeouts | undefined>;

    /**
     * Create a KeyVaultManagedStorageAccount resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KeyVaultManagedStorageAccountArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KeyVaultManagedStorageAccountArgs | KeyVaultManagedStorageAccountState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as KeyVaultManagedStorageAccountState | undefined;
            resourceInputs["keyVaultId"] = state ? state.keyVaultId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["regenerateKeyAutomatically"] = state ? state.regenerateKeyAutomatically : undefined;
            resourceInputs["regenerationPeriod"] = state ? state.regenerationPeriod : undefined;
            resourceInputs["storageAccountId"] = state ? state.storageAccountId : undefined;
            resourceInputs["storageAccountKey"] = state ? state.storageAccountKey : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as KeyVaultManagedStorageAccountArgs | undefined;
            if ((!args || args.keyVaultId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'keyVaultId'");
            }
            if ((!args || args.storageAccountId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageAccountId'");
            }
            if ((!args || args.storageAccountKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageAccountKey'");
            }
            resourceInputs["keyVaultId"] = args ? args.keyVaultId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["regenerateKeyAutomatically"] = args ? args.regenerateKeyAutomatically : undefined;
            resourceInputs["regenerationPeriod"] = args ? args.regenerationPeriod : undefined;
            resourceInputs["storageAccountId"] = args ? args.storageAccountId : undefined;
            resourceInputs["storageAccountKey"] = args ? args.storageAccountKey : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(KeyVaultManagedStorageAccount.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering KeyVaultManagedStorageAccount resources.
 */
export interface KeyVaultManagedStorageAccountState {
    keyVaultId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    regenerateKeyAutomatically?: pulumi.Input<boolean>;
    regenerationPeriod?: pulumi.Input<string>;
    storageAccountId?: pulumi.Input<string>;
    storageAccountKey?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.KeyVaultManagedStorageAccountTimeouts>;
}

/**
 * The set of arguments for constructing a KeyVaultManagedStorageAccount resource.
 */
export interface KeyVaultManagedStorageAccountArgs {
    keyVaultId: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    regenerateKeyAutomatically?: pulumi.Input<boolean>;
    regenerationPeriod?: pulumi.Input<string>;
    storageAccountId: pulumi.Input<string>;
    storageAccountKey: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.KeyVaultManagedStorageAccountTimeouts>;
}
