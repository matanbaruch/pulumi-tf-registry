// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DatabaseManagementExternalDbSystemStackMonitoringsManagement extends pulumi.CustomResource {
    /**
     * Get an existing DatabaseManagementExternalDbSystemStackMonitoringsManagement resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatabaseManagementExternalDbSystemStackMonitoringsManagementState, opts?: pulumi.CustomResourceOptions): DatabaseManagementExternalDbSystemStackMonitoringsManagement {
        return new DatabaseManagementExternalDbSystemStackMonitoringsManagement(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/databaseManagementExternalDbSystemStackMonitoringsManagement:DatabaseManagementExternalDbSystemStackMonitoringsManagement';

    /**
     * Returns true if the given object is an instance of DatabaseManagementExternalDbSystemStackMonitoringsManagement.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatabaseManagementExternalDbSystemStackMonitoringsManagement {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatabaseManagementExternalDbSystemStackMonitoringsManagement.__pulumiType;
    }

    public readonly enableStackMonitoring!: pulumi.Output<boolean>;
    public readonly externalDbSystemId!: pulumi.Output<string>;
    public readonly isEnabled!: pulumi.Output<boolean>;
    public readonly metadata!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts | undefined>;

    /**
     * Create a DatabaseManagementExternalDbSystemStackMonitoringsManagement resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseManagementExternalDbSystemStackMonitoringsManagementArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DatabaseManagementExternalDbSystemStackMonitoringsManagementArgs | DatabaseManagementExternalDbSystemStackMonitoringsManagementState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DatabaseManagementExternalDbSystemStackMonitoringsManagementState | undefined;
            resourceInputs["enableStackMonitoring"] = state ? state.enableStackMonitoring : undefined;
            resourceInputs["externalDbSystemId"] = state ? state.externalDbSystemId : undefined;
            resourceInputs["isEnabled"] = state ? state.isEnabled : undefined;
            resourceInputs["metadata"] = state ? state.metadata : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as DatabaseManagementExternalDbSystemStackMonitoringsManagementArgs | undefined;
            if ((!args || args.enableStackMonitoring === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enableStackMonitoring'");
            }
            if ((!args || args.externalDbSystemId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'externalDbSystemId'");
            }
            resourceInputs["enableStackMonitoring"] = args ? args.enableStackMonitoring : undefined;
            resourceInputs["externalDbSystemId"] = args ? args.externalDbSystemId : undefined;
            resourceInputs["isEnabled"] = args ? args.isEnabled : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DatabaseManagementExternalDbSystemStackMonitoringsManagement.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DatabaseManagementExternalDbSystemStackMonitoringsManagement resources.
 */
export interface DatabaseManagementExternalDbSystemStackMonitoringsManagementState {
    enableStackMonitoring?: pulumi.Input<boolean>;
    externalDbSystemId?: pulumi.Input<string>;
    isEnabled?: pulumi.Input<boolean>;
    metadata?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts>;
}

/**
 * The set of arguments for constructing a DatabaseManagementExternalDbSystemStackMonitoringsManagement resource.
 */
export interface DatabaseManagementExternalDbSystemStackMonitoringsManagementArgs {
    enableStackMonitoring: pulumi.Input<boolean>;
    externalDbSystemId: pulumi.Input<string>;
    isEnabled?: pulumi.Input<boolean>;
    metadata?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DatabaseManagementExternalDbSystemStackMonitoringsManagementTimeouts>;
}
