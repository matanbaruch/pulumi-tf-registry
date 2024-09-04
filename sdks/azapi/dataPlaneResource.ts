// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DataPlaneResource extends pulumi.CustomResource {
    /**
     * Get an existing DataPlaneResource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DataPlaneResourceState, opts?: pulumi.CustomResourceOptions): DataPlaneResource {
        return new DataPlaneResource(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azapi:index/dataPlaneResource:DataPlaneResource';

    /**
     * Returns true if the given object is an instance of DataPlaneResource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DataPlaneResource {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DataPlaneResource.__pulumiType;
    }

    public readonly body!: pulumi.Output<any>;
    public readonly ignoreCasing!: pulumi.Output<boolean>;
    public readonly ignoreMissingProperty!: pulumi.Output<boolean>;
    public readonly locks!: pulumi.Output<string[] | undefined>;
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly output!: pulumi.Output<any>;
    public readonly parentId!: pulumi.Output<string>;
    public readonly responseExportValues!: pulumi.Output<string[] | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.DataPlaneResourceTimeouts | undefined>;
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a DataPlaneResource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataPlaneResourceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DataPlaneResourceArgs | DataPlaneResourceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DataPlaneResourceState | undefined;
            resourceInputs["body"] = state ? state.body : undefined;
            resourceInputs["ignoreCasing"] = state ? state.ignoreCasing : undefined;
            resourceInputs["ignoreMissingProperty"] = state ? state.ignoreMissingProperty : undefined;
            resourceInputs["locks"] = state ? state.locks : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["output"] = state ? state.output : undefined;
            resourceInputs["parentId"] = state ? state.parentId : undefined;
            resourceInputs["responseExportValues"] = state ? state.responseExportValues : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as DataPlaneResourceArgs | undefined;
            if ((!args || args.parentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'parentId'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["body"] = args ? args.body : undefined;
            resourceInputs["ignoreCasing"] = args ? args.ignoreCasing : undefined;
            resourceInputs["ignoreMissingProperty"] = args ? args.ignoreMissingProperty : undefined;
            resourceInputs["locks"] = args ? args.locks : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["parentId"] = args ? args.parentId : undefined;
            resourceInputs["responseExportValues"] = args ? args.responseExportValues : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["output"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DataPlaneResource.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DataPlaneResource resources.
 */
export interface DataPlaneResourceState {
    body?: any;
    ignoreCasing?: pulumi.Input<boolean>;
    ignoreMissingProperty?: pulumi.Input<boolean>;
    locks?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    output?: any;
    parentId?: pulumi.Input<string>;
    responseExportValues?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.DataPlaneResourceTimeouts>;
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DataPlaneResource resource.
 */
export interface DataPlaneResourceArgs {
    body?: any;
    ignoreCasing?: pulumi.Input<boolean>;
    ignoreMissingProperty?: pulumi.Input<boolean>;
    locks?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    parentId: pulumi.Input<string>;
    responseExportValues?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.DataPlaneResourceTimeouts>;
    type: pulumi.Input<string>;
}
