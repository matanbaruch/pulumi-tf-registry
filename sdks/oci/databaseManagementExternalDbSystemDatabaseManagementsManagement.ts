// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DatabaseManagementExternalDbSystemDatabaseManagementsManagement extends pulumi.CustomResource {
    /**
     * Get an existing DatabaseManagementExternalDbSystemDatabaseManagementsManagement resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatabaseManagementExternalDbSystemDatabaseManagementsManagementState, opts?: pulumi.CustomResourceOptions): DatabaseManagementExternalDbSystemDatabaseManagementsManagement {
        return new DatabaseManagementExternalDbSystemDatabaseManagementsManagement(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/databaseManagementExternalDbSystemDatabaseManagementsManagement:DatabaseManagementExternalDbSystemDatabaseManagementsManagement';

    /**
     * Returns true if the given object is an instance of DatabaseManagementExternalDbSystemDatabaseManagementsManagement.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatabaseManagementExternalDbSystemDatabaseManagementsManagement {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatabaseManagementExternalDbSystemDatabaseManagementsManagement.__pulumiType;
    }

    public readonly enableDatabaseManagement!: pulumi.Output<boolean>;
    public readonly externalDbSystemId!: pulumi.Output<string>;
    public readonly licenseModel!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts | undefined>;

    /**
     * Create a DatabaseManagementExternalDbSystemDatabaseManagementsManagement resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseManagementExternalDbSystemDatabaseManagementsManagementArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DatabaseManagementExternalDbSystemDatabaseManagementsManagementArgs | DatabaseManagementExternalDbSystemDatabaseManagementsManagementState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DatabaseManagementExternalDbSystemDatabaseManagementsManagementState | undefined;
            resourceInputs["enableDatabaseManagement"] = state ? state.enableDatabaseManagement : undefined;
            resourceInputs["externalDbSystemId"] = state ? state.externalDbSystemId : undefined;
            resourceInputs["licenseModel"] = state ? state.licenseModel : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as DatabaseManagementExternalDbSystemDatabaseManagementsManagementArgs | undefined;
            if ((!args || args.enableDatabaseManagement === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enableDatabaseManagement'");
            }
            if ((!args || args.externalDbSystemId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'externalDbSystemId'");
            }
            resourceInputs["enableDatabaseManagement"] = args ? args.enableDatabaseManagement : undefined;
            resourceInputs["externalDbSystemId"] = args ? args.externalDbSystemId : undefined;
            resourceInputs["licenseModel"] = args ? args.licenseModel : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DatabaseManagementExternalDbSystemDatabaseManagementsManagement.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DatabaseManagementExternalDbSystemDatabaseManagementsManagement resources.
 */
export interface DatabaseManagementExternalDbSystemDatabaseManagementsManagementState {
    enableDatabaseManagement?: pulumi.Input<boolean>;
    externalDbSystemId?: pulumi.Input<string>;
    licenseModel?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts>;
}

/**
 * The set of arguments for constructing a DatabaseManagementExternalDbSystemDatabaseManagementsManagement resource.
 */
export interface DatabaseManagementExternalDbSystemDatabaseManagementsManagementArgs {
    enableDatabaseManagement: pulumi.Input<boolean>;
    externalDbSystemId: pulumi.Input<string>;
    licenseModel?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts>;
}
