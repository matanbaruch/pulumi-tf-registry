// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Floor extends pulumi.CustomResource {
    /**
     * Get an existing Floor resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FloorState, opts?: pulumi.CustomResourceOptions): Floor {
        return new Floor(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'catalystcenter:index/floor:Floor';

    /**
     * Returns true if the given object is an instance of Floor.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Floor {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Floor.__pulumiType;
    }

    /**
     * Floor number
     */
    public readonly floorNumber!: pulumi.Output<number | undefined>;
    /**
     * Height
     */
    public readonly height!: pulumi.Output<number>;
    /**
     * Length
     */
    public readonly length!: pulumi.Output<number>;
    /**
     * The name of the floor
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The path of the parent building, e.g. `Global/Building1`
     */
    public readonly parentName!: pulumi.Output<string>;
    /**
     * The RF model - Choices: `Cubes And Walled Offices`, `Drywall Office Only`, `Indoor High Ceiling`, `Outdoor Open Space`
     */
    public readonly rfModel!: pulumi.Output<string>;
    /**
     * Width
     */
    public readonly width!: pulumi.Output<number>;

    /**
     * Create a Floor resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FloorArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FloorArgs | FloorState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FloorState | undefined;
            resourceInputs["floorNumber"] = state ? state.floorNumber : undefined;
            resourceInputs["height"] = state ? state.height : undefined;
            resourceInputs["length"] = state ? state.length : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["parentName"] = state ? state.parentName : undefined;
            resourceInputs["rfModel"] = state ? state.rfModel : undefined;
            resourceInputs["width"] = state ? state.width : undefined;
        } else {
            const args = argsOrState as FloorArgs | undefined;
            if ((!args || args.height === undefined) && !opts.urn) {
                throw new Error("Missing required property 'height'");
            }
            if ((!args || args.length === undefined) && !opts.urn) {
                throw new Error("Missing required property 'length'");
            }
            if ((!args || args.parentName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'parentName'");
            }
            if ((!args || args.rfModel === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rfModel'");
            }
            if ((!args || args.width === undefined) && !opts.urn) {
                throw new Error("Missing required property 'width'");
            }
            resourceInputs["floorNumber"] = args ? args.floorNumber : undefined;
            resourceInputs["height"] = args ? args.height : undefined;
            resourceInputs["length"] = args ? args.length : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["parentName"] = args ? args.parentName : undefined;
            resourceInputs["rfModel"] = args ? args.rfModel : undefined;
            resourceInputs["width"] = args ? args.width : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Floor.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Floor resources.
 */
export interface FloorState {
    /**
     * Floor number
     */
    floorNumber?: pulumi.Input<number>;
    /**
     * Height
     */
    height?: pulumi.Input<number>;
    /**
     * Length
     */
    length?: pulumi.Input<number>;
    /**
     * The name of the floor
     */
    name?: pulumi.Input<string>;
    /**
     * The path of the parent building, e.g. `Global/Building1`
     */
    parentName?: pulumi.Input<string>;
    /**
     * The RF model - Choices: `Cubes And Walled Offices`, `Drywall Office Only`, `Indoor High Ceiling`, `Outdoor Open Space`
     */
    rfModel?: pulumi.Input<string>;
    /**
     * Width
     */
    width?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a Floor resource.
 */
export interface FloorArgs {
    /**
     * Floor number
     */
    floorNumber?: pulumi.Input<number>;
    /**
     * Height
     */
    height: pulumi.Input<number>;
    /**
     * Length
     */
    length: pulumi.Input<number>;
    /**
     * The name of the floor
     */
    name?: pulumi.Input<string>;
    /**
     * The path of the parent building, e.g. `Global/Building1`
     */
    parentName: pulumi.Input<string>;
    /**
     * The RF model - Choices: `Cubes And Walled Offices`, `Drywall Office Only`, `Indoor High Ceiling`, `Outdoor Open Space`
     */
    rfModel: pulumi.Input<string>;
    /**
     * Width
     */
    width: pulumi.Input<number>;
}
