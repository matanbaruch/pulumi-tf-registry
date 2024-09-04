// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class UpgradePrepare extends pulumi.CustomResource {
    /**
     * Get an existing UpgradePrepare resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UpgradePrepareState, opts?: pulumi.CustomResourceOptions): UpgradePrepare {
        return new UpgradePrepare(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nsxt:index/upgradePrepare:UpgradePrepare';

    /**
     * Returns true if the given object is an instance of UpgradePrepare.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is UpgradePrepare {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === UpgradePrepare.__pulumiType;
    }

    /**
     * Whether to accept the user agreement
     */
    public readonly acceptUserAgreement!: pulumi.Output<boolean>;
    /**
     * Timeout for uploading bundle in seconds
     */
    public readonly bundleUploadTimeout!: pulumi.Output<number | undefined>;
    /**
     * List of failed prechecks for the upgrade, including both warnings and errors
     */
    public /*out*/ readonly failedPrechecks!: pulumi.Output<outputs.UpgradePrepareFailedPrecheck[]>;
    /**
     * URL of the NSXT Upgrade precheck bundle (Only applied to NSXT version >= 4.1.1)
     */
    public readonly precheckBundleUrl!: pulumi.Output<string | undefined>;
    /**
     * Timeout for executing pre-upgrade checks in seconds
     */
    public readonly precheckTimeout!: pulumi.Output<number | undefined>;
    /**
     * Timeout for upgrading upgrade coordinator in seconds
     */
    public readonly ucUpgradeTimeout!: pulumi.Output<number | undefined>;
    /**
     * URL of the NSXT Upgrade bundle
     */
    public readonly upgradeBundleUrl!: pulumi.Output<string>;
    /**
     * Target upgrade version for NSX, format is x.x.x..., should include at least 3 digits, example: 4.1.2
     */
    public readonly version!: pulumi.Output<string | undefined>;

    /**
     * Create a UpgradePrepare resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UpgradePrepareArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: UpgradePrepareArgs | UpgradePrepareState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as UpgradePrepareState | undefined;
            resourceInputs["acceptUserAgreement"] = state ? state.acceptUserAgreement : undefined;
            resourceInputs["bundleUploadTimeout"] = state ? state.bundleUploadTimeout : undefined;
            resourceInputs["failedPrechecks"] = state ? state.failedPrechecks : undefined;
            resourceInputs["precheckBundleUrl"] = state ? state.precheckBundleUrl : undefined;
            resourceInputs["precheckTimeout"] = state ? state.precheckTimeout : undefined;
            resourceInputs["ucUpgradeTimeout"] = state ? state.ucUpgradeTimeout : undefined;
            resourceInputs["upgradeBundleUrl"] = state ? state.upgradeBundleUrl : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as UpgradePrepareArgs | undefined;
            if ((!args || args.acceptUserAgreement === undefined) && !opts.urn) {
                throw new Error("Missing required property 'acceptUserAgreement'");
            }
            if ((!args || args.upgradeBundleUrl === undefined) && !opts.urn) {
                throw new Error("Missing required property 'upgradeBundleUrl'");
            }
            resourceInputs["acceptUserAgreement"] = args ? args.acceptUserAgreement : undefined;
            resourceInputs["bundleUploadTimeout"] = args ? args.bundleUploadTimeout : undefined;
            resourceInputs["precheckBundleUrl"] = args ? args.precheckBundleUrl : undefined;
            resourceInputs["precheckTimeout"] = args ? args.precheckTimeout : undefined;
            resourceInputs["ucUpgradeTimeout"] = args ? args.ucUpgradeTimeout : undefined;
            resourceInputs["upgradeBundleUrl"] = args ? args.upgradeBundleUrl : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["failedPrechecks"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(UpgradePrepare.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering UpgradePrepare resources.
 */
export interface UpgradePrepareState {
    /**
     * Whether to accept the user agreement
     */
    acceptUserAgreement?: pulumi.Input<boolean>;
    /**
     * Timeout for uploading bundle in seconds
     */
    bundleUploadTimeout?: pulumi.Input<number>;
    /**
     * List of failed prechecks for the upgrade, including both warnings and errors
     */
    failedPrechecks?: pulumi.Input<pulumi.Input<inputs.UpgradePrepareFailedPrecheck>[]>;
    /**
     * URL of the NSXT Upgrade precheck bundle (Only applied to NSXT version >= 4.1.1)
     */
    precheckBundleUrl?: pulumi.Input<string>;
    /**
     * Timeout for executing pre-upgrade checks in seconds
     */
    precheckTimeout?: pulumi.Input<number>;
    /**
     * Timeout for upgrading upgrade coordinator in seconds
     */
    ucUpgradeTimeout?: pulumi.Input<number>;
    /**
     * URL of the NSXT Upgrade bundle
     */
    upgradeBundleUrl?: pulumi.Input<string>;
    /**
     * Target upgrade version for NSX, format is x.x.x..., should include at least 3 digits, example: 4.1.2
     */
    version?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a UpgradePrepare resource.
 */
export interface UpgradePrepareArgs {
    /**
     * Whether to accept the user agreement
     */
    acceptUserAgreement: pulumi.Input<boolean>;
    /**
     * Timeout for uploading bundle in seconds
     */
    bundleUploadTimeout?: pulumi.Input<number>;
    /**
     * URL of the NSXT Upgrade precheck bundle (Only applied to NSXT version >= 4.1.1)
     */
    precheckBundleUrl?: pulumi.Input<string>;
    /**
     * Timeout for executing pre-upgrade checks in seconds
     */
    precheckTimeout?: pulumi.Input<number>;
    /**
     * Timeout for upgrading upgrade coordinator in seconds
     */
    ucUpgradeTimeout?: pulumi.Input<number>;
    /**
     * URL of the NSXT Upgrade bundle
     */
    upgradeBundleUrl: pulumi.Input<string>;
    /**
     * Target upgrade version for NSX, format is x.x.x..., should include at least 3 digits, example: 4.1.2
     */
    version?: pulumi.Input<string>;
}
