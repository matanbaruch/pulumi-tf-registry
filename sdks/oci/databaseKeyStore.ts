// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DatabaseKeyStore extends pulumi.CustomResource {
    /**
     * Get an existing DatabaseKeyStore resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatabaseKeyStoreState, opts?: pulumi.CustomResourceOptions): DatabaseKeyStore {
        return new DatabaseKeyStore(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/databaseKeyStore:DatabaseKeyStore';

    /**
     * Returns true if the given object is an instance of DatabaseKeyStore.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatabaseKeyStore {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatabaseKeyStore.__pulumiType;
    }

    public /*out*/ readonly associatedDatabases!: pulumi.Output<outputs.DatabaseKeyStoreAssociatedDatabase[]>;
    public readonly compartmentId!: pulumi.Output<string>;
    public readonly confirmDetailsTrigger!: pulumi.Output<number | undefined>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly lifecycleDetails!: pulumi.Output<string>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.DatabaseKeyStoreTimeouts | undefined>;
    public readonly typeDetails!: pulumi.Output<outputs.DatabaseKeyStoreTypeDetails>;

    /**
     * Create a DatabaseKeyStore resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseKeyStoreArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DatabaseKeyStoreArgs | DatabaseKeyStoreState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DatabaseKeyStoreState | undefined;
            resourceInputs["associatedDatabases"] = state ? state.associatedDatabases : undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["confirmDetailsTrigger"] = state ? state.confirmDetailsTrigger : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["lifecycleDetails"] = state ? state.lifecycleDetails : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["typeDetails"] = state ? state.typeDetails : undefined;
        } else {
            const args = argsOrState as DatabaseKeyStoreArgs | undefined;
            if ((!args || args.compartmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'compartmentId'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.typeDetails === undefined) && !opts.urn) {
                throw new Error("Missing required property 'typeDetails'");
            }
            resourceInputs["compartmentId"] = args ? args.compartmentId : undefined;
            resourceInputs["confirmDetailsTrigger"] = args ? args.confirmDetailsTrigger : undefined;
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["typeDetails"] = args ? args.typeDetails : undefined;
            resourceInputs["associatedDatabases"] = undefined /*out*/;
            resourceInputs["lifecycleDetails"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DatabaseKeyStore.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DatabaseKeyStore resources.
 */
export interface DatabaseKeyStoreState {
    associatedDatabases?: pulumi.Input<pulumi.Input<inputs.DatabaseKeyStoreAssociatedDatabase>[]>;
    compartmentId?: pulumi.Input<string>;
    confirmDetailsTrigger?: pulumi.Input<number>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    lifecycleDetails?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    timeCreated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DatabaseKeyStoreTimeouts>;
    typeDetails?: pulumi.Input<inputs.DatabaseKeyStoreTypeDetails>;
}

/**
 * The set of arguments for constructing a DatabaseKeyStore resource.
 */
export interface DatabaseKeyStoreArgs {
    compartmentId: pulumi.Input<string>;
    confirmDetailsTrigger?: pulumi.Input<number>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.DatabaseKeyStoreTimeouts>;
    typeDetails: pulumi.Input<inputs.DatabaseKeyStoreTypeDetails>;
}
