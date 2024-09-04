// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DatabaseExternalNonContainerDatabaseOperationsInsightsManagement extends pulumi.CustomResource {
    /**
     * Get an existing DatabaseExternalNonContainerDatabaseOperationsInsightsManagement resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatabaseExternalNonContainerDatabaseOperationsInsightsManagementState, opts?: pulumi.CustomResourceOptions): DatabaseExternalNonContainerDatabaseOperationsInsightsManagement {
        return new DatabaseExternalNonContainerDatabaseOperationsInsightsManagement(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/databaseExternalNonContainerDatabaseOperationsInsightsManagement:DatabaseExternalNonContainerDatabaseOperationsInsightsManagement';

    /**
     * Returns true if the given object is an instance of DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatabaseExternalNonContainerDatabaseOperationsInsightsManagement {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.__pulumiType;
    }

    public readonly enableOperationsInsights!: pulumi.Output<boolean>;
    public readonly externalDatabaseConnectorId!: pulumi.Output<string>;
    public readonly externalNonContainerDatabaseId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts | undefined>;

    /**
     * Create a DatabaseExternalNonContainerDatabaseOperationsInsightsManagement resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseExternalNonContainerDatabaseOperationsInsightsManagementArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DatabaseExternalNonContainerDatabaseOperationsInsightsManagementArgs | DatabaseExternalNonContainerDatabaseOperationsInsightsManagementState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DatabaseExternalNonContainerDatabaseOperationsInsightsManagementState | undefined;
            resourceInputs["enableOperationsInsights"] = state ? state.enableOperationsInsights : undefined;
            resourceInputs["externalDatabaseConnectorId"] = state ? state.externalDatabaseConnectorId : undefined;
            resourceInputs["externalNonContainerDatabaseId"] = state ? state.externalNonContainerDatabaseId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as DatabaseExternalNonContainerDatabaseOperationsInsightsManagementArgs | undefined;
            if ((!args || args.enableOperationsInsights === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enableOperationsInsights'");
            }
            if ((!args || args.externalDatabaseConnectorId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'externalDatabaseConnectorId'");
            }
            if ((!args || args.externalNonContainerDatabaseId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'externalNonContainerDatabaseId'");
            }
            resourceInputs["enableOperationsInsights"] = args ? args.enableOperationsInsights : undefined;
            resourceInputs["externalDatabaseConnectorId"] = args ? args.externalDatabaseConnectorId : undefined;
            resourceInputs["externalNonContainerDatabaseId"] = args ? args.externalNonContainerDatabaseId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DatabaseExternalNonContainerDatabaseOperationsInsightsManagement resources.
 */
export interface DatabaseExternalNonContainerDatabaseOperationsInsightsManagementState {
    enableOperationsInsights?: pulumi.Input<boolean>;
    externalDatabaseConnectorId?: pulumi.Input<string>;
    externalNonContainerDatabaseId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts>;
}

/**
 * The set of arguments for constructing a DatabaseExternalNonContainerDatabaseOperationsInsightsManagement resource.
 */
export interface DatabaseExternalNonContainerDatabaseOperationsInsightsManagementArgs {
    enableOperationsInsights: pulumi.Input<boolean>;
    externalDatabaseConnectorId: pulumi.Input<string>;
    externalNonContainerDatabaseId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts>;
}
