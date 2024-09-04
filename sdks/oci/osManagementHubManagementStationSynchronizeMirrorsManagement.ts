// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class OsManagementHubManagementStationSynchronizeMirrorsManagement extends pulumi.CustomResource {
    /**
     * Get an existing OsManagementHubManagementStationSynchronizeMirrorsManagement resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OsManagementHubManagementStationSynchronizeMirrorsManagementState, opts?: pulumi.CustomResourceOptions): OsManagementHubManagementStationSynchronizeMirrorsManagement {
        return new OsManagementHubManagementStationSynchronizeMirrorsManagement(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/osManagementHubManagementStationSynchronizeMirrorsManagement:OsManagementHubManagementStationSynchronizeMirrorsManagement';

    /**
     * Returns true if the given object is an instance of OsManagementHubManagementStationSynchronizeMirrorsManagement.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OsManagementHubManagementStationSynchronizeMirrorsManagement {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OsManagementHubManagementStationSynchronizeMirrorsManagement.__pulumiType;
    }

    public readonly managementStationId!: pulumi.Output<string>;
    public readonly softwareSourceLists!: pulumi.Output<string[]>;
    public readonly timeouts!: pulumi.Output<outputs.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts | undefined>;

    /**
     * Create a OsManagementHubManagementStationSynchronizeMirrorsManagement resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OsManagementHubManagementStationSynchronizeMirrorsManagementArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OsManagementHubManagementStationSynchronizeMirrorsManagementArgs | OsManagementHubManagementStationSynchronizeMirrorsManagementState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OsManagementHubManagementStationSynchronizeMirrorsManagementState | undefined;
            resourceInputs["managementStationId"] = state ? state.managementStationId : undefined;
            resourceInputs["softwareSourceLists"] = state ? state.softwareSourceLists : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as OsManagementHubManagementStationSynchronizeMirrorsManagementArgs | undefined;
            if ((!args || args.managementStationId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managementStationId'");
            }
            if ((!args || args.softwareSourceLists === undefined) && !opts.urn) {
                throw new Error("Missing required property 'softwareSourceLists'");
            }
            resourceInputs["managementStationId"] = args ? args.managementStationId : undefined;
            resourceInputs["softwareSourceLists"] = args ? args.softwareSourceLists : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OsManagementHubManagementStationSynchronizeMirrorsManagement.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OsManagementHubManagementStationSynchronizeMirrorsManagement resources.
 */
export interface OsManagementHubManagementStationSynchronizeMirrorsManagementState {
    managementStationId?: pulumi.Input<string>;
    softwareSourceLists?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts>;
}

/**
 * The set of arguments for constructing a OsManagementHubManagementStationSynchronizeMirrorsManagement resource.
 */
export interface OsManagementHubManagementStationSynchronizeMirrorsManagementArgs {
    managementStationId: pulumi.Input<string>;
    softwareSourceLists: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts>;
}
