// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class AxdebugCapture extends pulumi.CustomResource {
    /**
     * Get an existing AxdebugCapture resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AxdebugCaptureState, opts?: pulumi.CustomResourceOptions): AxdebugCapture {
        return new AxdebugCapture(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/axdebugCapture:AxdebugCapture';

    /**
     * Returns true if the given object is an instance of AxdebugCapture.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AxdebugCapture {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AxdebugCapture.__pulumiType;
    }

    /**
     * Print basic packet information
     */
    public readonly brief!: pulumi.Output<number | undefined>;
    /**
     * Only for current-slot of chassis
     */
    public readonly currentSlot!: pulumi.Output<number | undefined>;
    /**
     * Include packet payload
     */
    public readonly detail!: pulumi.Output<number | undefined>;
    /**
     * Non-stop execution
     */
    public readonly noStop!: pulumi.Output<number | undefined>;
    /**
     * Save packets into file (Specify filename to save packets)
     */
    public readonly save!: pulumi.Output<string | undefined>;

    /**
     * Create a AxdebugCapture resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: AxdebugCaptureArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AxdebugCaptureArgs | AxdebugCaptureState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AxdebugCaptureState | undefined;
            resourceInputs["brief"] = state ? state.brief : undefined;
            resourceInputs["currentSlot"] = state ? state.currentSlot : undefined;
            resourceInputs["detail"] = state ? state.detail : undefined;
            resourceInputs["noStop"] = state ? state.noStop : undefined;
            resourceInputs["save"] = state ? state.save : undefined;
        } else {
            const args = argsOrState as AxdebugCaptureArgs | undefined;
            resourceInputs["brief"] = args ? args.brief : undefined;
            resourceInputs["currentSlot"] = args ? args.currentSlot : undefined;
            resourceInputs["detail"] = args ? args.detail : undefined;
            resourceInputs["noStop"] = args ? args.noStop : undefined;
            resourceInputs["save"] = args ? args.save : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AxdebugCapture.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AxdebugCapture resources.
 */
export interface AxdebugCaptureState {
    /**
     * Print basic packet information
     */
    brief?: pulumi.Input<number>;
    /**
     * Only for current-slot of chassis
     */
    currentSlot?: pulumi.Input<number>;
    /**
     * Include packet payload
     */
    detail?: pulumi.Input<number>;
    /**
     * Non-stop execution
     */
    noStop?: pulumi.Input<number>;
    /**
     * Save packets into file (Specify filename to save packets)
     */
    save?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AxdebugCapture resource.
 */
export interface AxdebugCaptureArgs {
    /**
     * Print basic packet information
     */
    brief?: pulumi.Input<number>;
    /**
     * Only for current-slot of chassis
     */
    currentSlot?: pulumi.Input<number>;
    /**
     * Include packet payload
     */
    detail?: pulumi.Input<number>;
    /**
     * Non-stop execution
     */
    noStop?: pulumi.Input<number>;
    /**
     * Save packets into file (Specify filename to save packets)
     */
    save?: pulumi.Input<string>;
}
