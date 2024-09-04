// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class OsManagementHubManagedInstanceInstallWindowsUpdatesManagement extends pulumi.CustomResource {
    /**
     * Get an existing OsManagementHubManagedInstanceInstallWindowsUpdatesManagement resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OsManagementHubManagedInstanceInstallWindowsUpdatesManagementState, opts?: pulumi.CustomResourceOptions): OsManagementHubManagedInstanceInstallWindowsUpdatesManagement {
        return new OsManagementHubManagedInstanceInstallWindowsUpdatesManagement(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/osManagementHubManagedInstanceInstallWindowsUpdatesManagement:OsManagementHubManagedInstanceInstallWindowsUpdatesManagement';

    /**
     * Returns true if the given object is an instance of OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OsManagementHubManagedInstanceInstallWindowsUpdatesManagement {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.__pulumiType;
    }

    public readonly managedInstanceId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts | undefined>;
    public readonly windowsUpdateNames!: pulumi.Output<string[] | undefined>;
    public readonly windowsUpdateTypes!: pulumi.Output<string[] | undefined>;
    public readonly workRequestDetails!: pulumi.Output<outputs.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails | undefined>;

    /**
     * Create a OsManagementHubManagedInstanceInstallWindowsUpdatesManagement resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OsManagementHubManagedInstanceInstallWindowsUpdatesManagementArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OsManagementHubManagedInstanceInstallWindowsUpdatesManagementArgs | OsManagementHubManagedInstanceInstallWindowsUpdatesManagementState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OsManagementHubManagedInstanceInstallWindowsUpdatesManagementState | undefined;
            resourceInputs["managedInstanceId"] = state ? state.managedInstanceId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["windowsUpdateNames"] = state ? state.windowsUpdateNames : undefined;
            resourceInputs["windowsUpdateTypes"] = state ? state.windowsUpdateTypes : undefined;
            resourceInputs["workRequestDetails"] = state ? state.workRequestDetails : undefined;
        } else {
            const args = argsOrState as OsManagementHubManagedInstanceInstallWindowsUpdatesManagementArgs | undefined;
            if ((!args || args.managedInstanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managedInstanceId'");
            }
            resourceInputs["managedInstanceId"] = args ? args.managedInstanceId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["windowsUpdateNames"] = args ? args.windowsUpdateNames : undefined;
            resourceInputs["windowsUpdateTypes"] = args ? args.windowsUpdateTypes : undefined;
            resourceInputs["workRequestDetails"] = args ? args.workRequestDetails : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OsManagementHubManagedInstanceInstallWindowsUpdatesManagement resources.
 */
export interface OsManagementHubManagedInstanceInstallWindowsUpdatesManagementState {
    managedInstanceId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts>;
    windowsUpdateNames?: pulumi.Input<pulumi.Input<string>[]>;
    windowsUpdateTypes?: pulumi.Input<pulumi.Input<string>[]>;
    workRequestDetails?: pulumi.Input<inputs.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails>;
}

/**
 * The set of arguments for constructing a OsManagementHubManagedInstanceInstallWindowsUpdatesManagement resource.
 */
export interface OsManagementHubManagedInstanceInstallWindowsUpdatesManagementArgs {
    managedInstanceId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts>;
    windowsUpdateNames?: pulumi.Input<pulumi.Input<string>[]>;
    windowsUpdateTypes?: pulumi.Input<pulumi.Input<string>[]>;
    workRequestDetails?: pulumi.Input<inputs.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails>;
}
