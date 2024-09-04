// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class LighthouseApplyDiskBackup extends pulumi.CustomResource {
    /**
     * Get an existing LighthouseApplyDiskBackup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LighthouseApplyDiskBackupState, opts?: pulumi.CustomResourceOptions): LighthouseApplyDiskBackup {
        return new LighthouseApplyDiskBackup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/lighthouseApplyDiskBackup:LighthouseApplyDiskBackup';

    /**
     * Returns true if the given object is an instance of LighthouseApplyDiskBackup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LighthouseApplyDiskBackup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LighthouseApplyDiskBackup.__pulumiType;
    }

    /**
     * Disk backup ID.
     */
    public readonly diskBackupId!: pulumi.Output<string>;
    /**
     * Disk ID.
     */
    public readonly diskId!: pulumi.Output<string>;

    /**
     * Create a LighthouseApplyDiskBackup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LighthouseApplyDiskBackupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LighthouseApplyDiskBackupArgs | LighthouseApplyDiskBackupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LighthouseApplyDiskBackupState | undefined;
            resourceInputs["diskBackupId"] = state ? state.diskBackupId : undefined;
            resourceInputs["diskId"] = state ? state.diskId : undefined;
        } else {
            const args = argsOrState as LighthouseApplyDiskBackupArgs | undefined;
            if ((!args || args.diskBackupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'diskBackupId'");
            }
            if ((!args || args.diskId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'diskId'");
            }
            resourceInputs["diskBackupId"] = args ? args.diskBackupId : undefined;
            resourceInputs["diskId"] = args ? args.diskId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LighthouseApplyDiskBackup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LighthouseApplyDiskBackup resources.
 */
export interface LighthouseApplyDiskBackupState {
    /**
     * Disk backup ID.
     */
    diskBackupId?: pulumi.Input<string>;
    /**
     * Disk ID.
     */
    diskId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LighthouseApplyDiskBackup resource.
 */
export interface LighthouseApplyDiskBackupArgs {
    /**
     * Disk backup ID.
     */
    diskBackupId: pulumi.Input<string>;
    /**
     * Disk ID.
     */
    diskId: pulumi.Input<string>;
}
