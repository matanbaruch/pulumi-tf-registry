// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class AddressObject extends pulumi.CustomResource {
    /**
     * Get an existing AddressObject resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AddressObjectState, opts?: pulumi.CustomResourceOptions): AddressObject {
        return new AddressObject(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'panos:index/addressObject:AddressObject';

    /**
     * Returns true if the given object is an instance of AddressObject.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AddressObject {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AddressObject.__pulumiType;
    }

    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The device group.
     */
    public readonly deviceGroup!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    /**
     * The administrative tags.
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    public readonly type!: pulumi.Output<string | undefined>;
    public readonly value!: pulumi.Output<string>;
    /**
     * The vsys this object belongs in.
     */
    public readonly vsys!: pulumi.Output<string | undefined>;

    /**
     * Create a AddressObject resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AddressObjectArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AddressObjectArgs | AddressObjectState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AddressObjectState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["deviceGroup"] = state ? state.deviceGroup : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["value"] = state ? state.value : undefined;
            resourceInputs["vsys"] = state ? state.vsys : undefined;
        } else {
            const args = argsOrState as AddressObjectArgs | undefined;
            if ((!args || args.value === undefined) && !opts.urn) {
                throw new Error("Missing required property 'value'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["deviceGroup"] = args ? args.deviceGroup : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["value"] = args ? args.value : undefined;
            resourceInputs["vsys"] = args ? args.vsys : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AddressObject.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AddressObject resources.
 */
export interface AddressObjectState {
    description?: pulumi.Input<string>;
    /**
     * The device group.
     */
    deviceGroup?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * The administrative tags.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    type?: pulumi.Input<string>;
    value?: pulumi.Input<string>;
    /**
     * The vsys this object belongs in.
     */
    vsys?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AddressObject resource.
 */
export interface AddressObjectArgs {
    description?: pulumi.Input<string>;
    /**
     * The device group.
     */
    deviceGroup?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * The administrative tags.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    type?: pulumi.Input<string>;
    value: pulumi.Input<string>;
    /**
     * The vsys this object belongs in.
     */
    vsys?: pulumi.Input<string>;
}
