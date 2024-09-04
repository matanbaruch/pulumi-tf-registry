// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CbsDiskBackup extends pulumi.CustomResource {
    /**
     * Get an existing CbsDiskBackup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CbsDiskBackupState, opts?: pulumi.CustomResourceOptions): CbsDiskBackup {
        return new CbsDiskBackup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/cbsDiskBackup:CbsDiskBackup';

    /**
     * Returns true if the given object is an instance of CbsDiskBackup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CbsDiskBackup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CbsDiskBackup.__pulumiType;
    }

    /**
     * Backup point name.
     */
    public readonly diskBackupName!: pulumi.Output<string | undefined>;
    /**
     * ID of the original cloud disk of the backup point, which can be queried through the DescribeDisks API.
     */
    public readonly diskId!: pulumi.Output<string>;

    /**
     * Create a CbsDiskBackup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CbsDiskBackupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CbsDiskBackupArgs | CbsDiskBackupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CbsDiskBackupState | undefined;
            resourceInputs["diskBackupName"] = state ? state.diskBackupName : undefined;
            resourceInputs["diskId"] = state ? state.diskId : undefined;
        } else {
            const args = argsOrState as CbsDiskBackupArgs | undefined;
            if ((!args || args.diskId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'diskId'");
            }
            resourceInputs["diskBackupName"] = args ? args.diskBackupName : undefined;
            resourceInputs["diskId"] = args ? args.diskId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CbsDiskBackup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CbsDiskBackup resources.
 */
export interface CbsDiskBackupState {
    /**
     * Backup point name.
     */
    diskBackupName?: pulumi.Input<string>;
    /**
     * ID of the original cloud disk of the backup point, which can be queried through the DescribeDisks API.
     */
    diskId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CbsDiskBackup resource.
 */
export interface CbsDiskBackupArgs {
    /**
     * Backup point name.
     */
    diskBackupName?: pulumi.Input<string>;
    /**
     * ID of the original cloud disk of the backup point, which can be queried through the DescribeDisks API.
     */
    diskId: pulumi.Input<string>;
}
