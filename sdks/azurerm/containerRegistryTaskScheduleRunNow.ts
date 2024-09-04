// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ContainerRegistryTaskScheduleRunNow extends pulumi.CustomResource {
    /**
     * Get an existing ContainerRegistryTaskScheduleRunNow resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ContainerRegistryTaskScheduleRunNowState, opts?: pulumi.CustomResourceOptions): ContainerRegistryTaskScheduleRunNow {
        return new ContainerRegistryTaskScheduleRunNow(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/containerRegistryTaskScheduleRunNow:ContainerRegistryTaskScheduleRunNow';

    /**
     * Returns true if the given object is an instance of ContainerRegistryTaskScheduleRunNow.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ContainerRegistryTaskScheduleRunNow {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ContainerRegistryTaskScheduleRunNow.__pulumiType;
    }

    public readonly containerRegistryTaskId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ContainerRegistryTaskScheduleRunNowTimeouts | undefined>;

    /**
     * Create a ContainerRegistryTaskScheduleRunNow resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ContainerRegistryTaskScheduleRunNowArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ContainerRegistryTaskScheduleRunNowArgs | ContainerRegistryTaskScheduleRunNowState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ContainerRegistryTaskScheduleRunNowState | undefined;
            resourceInputs["containerRegistryTaskId"] = state ? state.containerRegistryTaskId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ContainerRegistryTaskScheduleRunNowArgs | undefined;
            if ((!args || args.containerRegistryTaskId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'containerRegistryTaskId'");
            }
            resourceInputs["containerRegistryTaskId"] = args ? args.containerRegistryTaskId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ContainerRegistryTaskScheduleRunNow.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ContainerRegistryTaskScheduleRunNow resources.
 */
export interface ContainerRegistryTaskScheduleRunNowState {
    containerRegistryTaskId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ContainerRegistryTaskScheduleRunNowTimeouts>;
}

/**
 * The set of arguments for constructing a ContainerRegistryTaskScheduleRunNow resource.
 */
export interface ContainerRegistryTaskScheduleRunNowArgs {
    containerRegistryTaskId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ContainerRegistryTaskScheduleRunNowTimeouts>;
}
