// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class GlobalacceleratorCustomRoutingEndpointGroup extends pulumi.CustomResource {
    /**
     * Get an existing GlobalacceleratorCustomRoutingEndpointGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GlobalacceleratorCustomRoutingEndpointGroupState, opts?: pulumi.CustomResourceOptions): GlobalacceleratorCustomRoutingEndpointGroup {
        return new GlobalacceleratorCustomRoutingEndpointGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/globalacceleratorCustomRoutingEndpointGroup:GlobalacceleratorCustomRoutingEndpointGroup';

    /**
     * Returns true if the given object is an instance of GlobalacceleratorCustomRoutingEndpointGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GlobalacceleratorCustomRoutingEndpointGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GlobalacceleratorCustomRoutingEndpointGroup.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly destinationConfigurations!: pulumi.Output<outputs.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfiguration[]>;
    public readonly endpointConfigurations!: pulumi.Output<outputs.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfiguration[] | undefined>;
    public readonly endpointGroupRegion!: pulumi.Output<string>;
    public readonly listenerArn!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.GlobalacceleratorCustomRoutingEndpointGroupTimeouts | undefined>;

    /**
     * Create a GlobalacceleratorCustomRoutingEndpointGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GlobalacceleratorCustomRoutingEndpointGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GlobalacceleratorCustomRoutingEndpointGroupArgs | GlobalacceleratorCustomRoutingEndpointGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GlobalacceleratorCustomRoutingEndpointGroupState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["destinationConfigurations"] = state ? state.destinationConfigurations : undefined;
            resourceInputs["endpointConfigurations"] = state ? state.endpointConfigurations : undefined;
            resourceInputs["endpointGroupRegion"] = state ? state.endpointGroupRegion : undefined;
            resourceInputs["listenerArn"] = state ? state.listenerArn : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as GlobalacceleratorCustomRoutingEndpointGroupArgs | undefined;
            if ((!args || args.destinationConfigurations === undefined) && !opts.urn) {
                throw new Error("Missing required property 'destinationConfigurations'");
            }
            if ((!args || args.listenerArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'listenerArn'");
            }
            resourceInputs["destinationConfigurations"] = args ? args.destinationConfigurations : undefined;
            resourceInputs["endpointConfigurations"] = args ? args.endpointConfigurations : undefined;
            resourceInputs["endpointGroupRegion"] = args ? args.endpointGroupRegion : undefined;
            resourceInputs["listenerArn"] = args ? args.listenerArn : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["arn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GlobalacceleratorCustomRoutingEndpointGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GlobalacceleratorCustomRoutingEndpointGroup resources.
 */
export interface GlobalacceleratorCustomRoutingEndpointGroupState {
    arn?: pulumi.Input<string>;
    destinationConfigurations?: pulumi.Input<pulumi.Input<inputs.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfiguration>[]>;
    endpointConfigurations?: pulumi.Input<pulumi.Input<inputs.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfiguration>[]>;
    endpointGroupRegion?: pulumi.Input<string>;
    listenerArn?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GlobalacceleratorCustomRoutingEndpointGroupTimeouts>;
}

/**
 * The set of arguments for constructing a GlobalacceleratorCustomRoutingEndpointGroup resource.
 */
export interface GlobalacceleratorCustomRoutingEndpointGroupArgs {
    destinationConfigurations: pulumi.Input<pulumi.Input<inputs.GlobalacceleratorCustomRoutingEndpointGroupDestinationConfiguration>[]>;
    endpointConfigurations?: pulumi.Input<pulumi.Input<inputs.GlobalacceleratorCustomRoutingEndpointGroupEndpointConfiguration>[]>;
    endpointGroupRegion?: pulumi.Input<string>;
    listenerArn: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GlobalacceleratorCustomRoutingEndpointGroupTimeouts>;
}
