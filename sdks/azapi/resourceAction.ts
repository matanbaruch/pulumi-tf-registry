// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ResourceAction extends pulumi.CustomResource {
    /**
     * Get an existing ResourceAction resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ResourceActionState, opts?: pulumi.CustomResourceOptions): ResourceAction {
        return new ResourceAction(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azapi:index/resourceAction:ResourceAction';

    /**
     * Returns true if the given object is an instance of ResourceAction.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ResourceAction {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ResourceAction.__pulumiType;
    }

    public readonly action!: pulumi.Output<string | undefined>;
    public readonly body!: pulumi.Output<any | undefined>;
    public readonly locks!: pulumi.Output<string[] | undefined>;
    public readonly method!: pulumi.Output<string>;
    public /*out*/ readonly output!: pulumi.Output<any>;
    public readonly resourceId!: pulumi.Output<string>;
    public readonly responseExportValues!: pulumi.Output<string[] | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.ResourceActionTimeouts | undefined>;
    public readonly type!: pulumi.Output<string>;
    public readonly when!: pulumi.Output<string>;

    /**
     * Create a ResourceAction resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ResourceActionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ResourceActionArgs | ResourceActionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ResourceActionState | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["body"] = state ? state.body : undefined;
            resourceInputs["locks"] = state ? state.locks : undefined;
            resourceInputs["method"] = state ? state.method : undefined;
            resourceInputs["output"] = state ? state.output : undefined;
            resourceInputs["resourceId"] = state ? state.resourceId : undefined;
            resourceInputs["responseExportValues"] = state ? state.responseExportValues : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["when"] = state ? state.when : undefined;
        } else {
            const args = argsOrState as ResourceActionArgs | undefined;
            if ((!args || args.resourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceId'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["body"] = args ? args.body : undefined;
            resourceInputs["locks"] = args ? args.locks : undefined;
            resourceInputs["method"] = args ? args.method : undefined;
            resourceInputs["resourceId"] = args ? args.resourceId : undefined;
            resourceInputs["responseExportValues"] = args ? args.responseExportValues : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["when"] = args ? args.when : undefined;
            resourceInputs["output"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ResourceAction.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ResourceAction resources.
 */
export interface ResourceActionState {
    action?: pulumi.Input<string>;
    body?: any;
    locks?: pulumi.Input<pulumi.Input<string>[]>;
    method?: pulumi.Input<string>;
    output?: any;
    resourceId?: pulumi.Input<string>;
    responseExportValues?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.ResourceActionTimeouts>;
    type?: pulumi.Input<string>;
    when?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ResourceAction resource.
 */
export interface ResourceActionArgs {
    action?: pulumi.Input<string>;
    body?: any;
    locks?: pulumi.Input<pulumi.Input<string>[]>;
    method?: pulumi.Input<string>;
    resourceId: pulumi.Input<string>;
    responseExportValues?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.ResourceActionTimeouts>;
    type: pulumi.Input<string>;
    when?: pulumi.Input<string>;
}
