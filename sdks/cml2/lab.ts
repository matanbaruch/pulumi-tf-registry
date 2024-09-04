// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Lab extends pulumi.CustomResource {
    /**
     * Get an existing Lab resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LabState, opts?: pulumi.CustomResourceOptions): Lab {
        return new Lab(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cml2:index/lab:Lab';

    /**
     * Returns true if the given object is an instance of Lab.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Lab {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Lab.__pulumiType;
    }

    /**
     * Creation date/time string in ISO8601 format.
     */
    public /*out*/ readonly created!: pulumi.Output<string>;
    /**
     * Lab description.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * Groups assigned to the lab.
     */
    public readonly groups!: pulumi.Output<outputs.LabGroup[]>;
    /**
     * Number of links in the lab.
     */
    public /*out*/ readonly linkCount!: pulumi.Output<number>;
    /**
     * Modification date/time string in ISO8601 format.
     */
    public /*out*/ readonly modified!: pulumi.Output<string>;
    /**
     * Number of nodes in the lab.
     */
    public /*out*/ readonly nodeCount!: pulumi.Output<number>;
    /**
     * Lab notes.
     */
    public readonly notes!: pulumi.Output<string>;
    /**
     * Owner of the lab, a UUID4.
     */
    public /*out*/ readonly owner!: pulumi.Output<string>;
    /**
     * Lab state, one of `DEFINED_ON_CORE`, `STARTED` or `STOPPED`.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * Title of the lab.
     */
    public readonly title!: pulumi.Output<string>;

    /**
     * Create a Lab resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: LabArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LabArgs | LabState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LabState | undefined;
            resourceInputs["created"] = state ? state.created : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["groups"] = state ? state.groups : undefined;
            resourceInputs["linkCount"] = state ? state.linkCount : undefined;
            resourceInputs["modified"] = state ? state.modified : undefined;
            resourceInputs["nodeCount"] = state ? state.nodeCount : undefined;
            resourceInputs["notes"] = state ? state.notes : undefined;
            resourceInputs["owner"] = state ? state.owner : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["title"] = state ? state.title : undefined;
        } else {
            const args = argsOrState as LabArgs | undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["groups"] = args ? args.groups : undefined;
            resourceInputs["notes"] = args ? args.notes : undefined;
            resourceInputs["title"] = args ? args.title : undefined;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["linkCount"] = undefined /*out*/;
            resourceInputs["modified"] = undefined /*out*/;
            resourceInputs["nodeCount"] = undefined /*out*/;
            resourceInputs["owner"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Lab.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Lab resources.
 */
export interface LabState {
    /**
     * Creation date/time string in ISO8601 format.
     */
    created?: pulumi.Input<string>;
    /**
     * Lab description.
     */
    description?: pulumi.Input<string>;
    /**
     * Groups assigned to the lab.
     */
    groups?: pulumi.Input<pulumi.Input<inputs.LabGroup>[]>;
    /**
     * Number of links in the lab.
     */
    linkCount?: pulumi.Input<number>;
    /**
     * Modification date/time string in ISO8601 format.
     */
    modified?: pulumi.Input<string>;
    /**
     * Number of nodes in the lab.
     */
    nodeCount?: pulumi.Input<number>;
    /**
     * Lab notes.
     */
    notes?: pulumi.Input<string>;
    /**
     * Owner of the lab, a UUID4.
     */
    owner?: pulumi.Input<string>;
    /**
     * Lab state, one of `DEFINED_ON_CORE`, `STARTED` or `STOPPED`.
     */
    state?: pulumi.Input<string>;
    /**
     * Title of the lab.
     */
    title?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Lab resource.
 */
export interface LabArgs {
    /**
     * Lab description.
     */
    description?: pulumi.Input<string>;
    /**
     * Groups assigned to the lab.
     */
    groups?: pulumi.Input<pulumi.Input<inputs.LabGroup>[]>;
    /**
     * Lab notes.
     */
    notes?: pulumi.Input<string>;
    /**
     * Title of the lab.
     */
    title?: pulumi.Input<string>;
}
