// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CvmProgramFpgaImage extends pulumi.CustomResource {
    /**
     * Get an existing CvmProgramFpgaImage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CvmProgramFpgaImageState, opts?: pulumi.CustomResourceOptions): CvmProgramFpgaImage {
        return new CvmProgramFpgaImage(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/cvmProgramFpgaImage:CvmProgramFpgaImage';

    /**
     * Returns true if the given object is an instance of CvmProgramFpgaImage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CvmProgramFpgaImage {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CvmProgramFpgaImage.__pulumiType;
    }

    /**
     * The DBDF number of the FPGA card on the instance, if left blank, the FPGA image will be burned to all FPGA cards owned
     * by the instance by default.
     */
    public readonly dbdFs!: pulumi.Output<string[] | undefined>;
    /**
     * Trial run, will not perform the actual burning action, the default is False.
     */
    public readonly dryRun!: pulumi.Output<boolean | undefined>;
    /**
     * COS URL address of the FPGA image file.
     */
    public readonly fpgaUrl!: pulumi.Output<string>;
    /**
     * The ID information of the instance.
     */
    public readonly instanceId!: pulumi.Output<string>;

    /**
     * Create a CvmProgramFpgaImage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CvmProgramFpgaImageArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CvmProgramFpgaImageArgs | CvmProgramFpgaImageState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CvmProgramFpgaImageState | undefined;
            resourceInputs["dbdFs"] = state ? state.dbdFs : undefined;
            resourceInputs["dryRun"] = state ? state.dryRun : undefined;
            resourceInputs["fpgaUrl"] = state ? state.fpgaUrl : undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
        } else {
            const args = argsOrState as CvmProgramFpgaImageArgs | undefined;
            if ((!args || args.fpgaUrl === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fpgaUrl'");
            }
            if ((!args || args.instanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceId'");
            }
            resourceInputs["dbdFs"] = args ? args.dbdFs : undefined;
            resourceInputs["dryRun"] = args ? args.dryRun : undefined;
            resourceInputs["fpgaUrl"] = args ? args.fpgaUrl : undefined;
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CvmProgramFpgaImage.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CvmProgramFpgaImage resources.
 */
export interface CvmProgramFpgaImageState {
    /**
     * The DBDF number of the FPGA card on the instance, if left blank, the FPGA image will be burned to all FPGA cards owned
     * by the instance by default.
     */
    dbdFs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Trial run, will not perform the actual burning action, the default is False.
     */
    dryRun?: pulumi.Input<boolean>;
    /**
     * COS URL address of the FPGA image file.
     */
    fpgaUrl?: pulumi.Input<string>;
    /**
     * The ID information of the instance.
     */
    instanceId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CvmProgramFpgaImage resource.
 */
export interface CvmProgramFpgaImageArgs {
    /**
     * The DBDF number of the FPGA card on the instance, if left blank, the FPGA image will be burned to all FPGA cards owned
     * by the instance by default.
     */
    dbdFs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Trial run, will not perform the actual burning action, the default is False.
     */
    dryRun?: pulumi.Input<boolean>;
    /**
     * COS URL address of the FPGA image file.
     */
    fpgaUrl: pulumi.Input<string>;
    /**
     * The ID information of the instance.
     */
    instanceId: pulumi.Input<string>;
}
