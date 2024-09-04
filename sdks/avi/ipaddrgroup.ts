// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Ipaddrgroup extends pulumi.CustomResource {
    /**
     * Get an existing Ipaddrgroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpaddrgroupState, opts?: pulumi.CustomResourceOptions): Ipaddrgroup {
        return new Ipaddrgroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'avi:index/ipaddrgroup:Ipaddrgroup';

    /**
     * Returns true if the given object is an instance of Ipaddrgroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Ipaddrgroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Ipaddrgroup.__pulumiType;
    }

    public readonly addrs!: pulumi.Output<outputs.IpaddrgroupAddr[] | undefined>;
    public readonly configpbAttributes!: pulumi.Output<outputs.IpaddrgroupConfigpbAttribute[] | undefined>;
    public readonly countryCodes!: pulumi.Output<string[] | undefined>;
    public readonly description!: pulumi.Output<string>;
    public readonly ipPorts!: pulumi.Output<outputs.IpaddrgroupIpPort[] | undefined>;
    public readonly marathonAppName!: pulumi.Output<string>;
    public readonly marathonServicePort!: pulumi.Output<string>;
    public readonly markers!: pulumi.Output<outputs.IpaddrgroupMarker[] | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly prefixes!: pulumi.Output<outputs.IpaddrgroupPrefix[] | undefined>;
    public readonly ranges!: pulumi.Output<outputs.IpaddrgroupRange[] | undefined>;
    public readonly tenantRef!: pulumi.Output<string>;
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a Ipaddrgroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IpaddrgroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IpaddrgroupArgs | IpaddrgroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IpaddrgroupState | undefined;
            resourceInputs["addrs"] = state ? state.addrs : undefined;
            resourceInputs["configpbAttributes"] = state ? state.configpbAttributes : undefined;
            resourceInputs["countryCodes"] = state ? state.countryCodes : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["ipPorts"] = state ? state.ipPorts : undefined;
            resourceInputs["marathonAppName"] = state ? state.marathonAppName : undefined;
            resourceInputs["marathonServicePort"] = state ? state.marathonServicePort : undefined;
            resourceInputs["markers"] = state ? state.markers : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["prefixes"] = state ? state.prefixes : undefined;
            resourceInputs["ranges"] = state ? state.ranges : undefined;
            resourceInputs["tenantRef"] = state ? state.tenantRef : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as IpaddrgroupArgs | undefined;
            resourceInputs["addrs"] = args ? args.addrs : undefined;
            resourceInputs["configpbAttributes"] = args ? args.configpbAttributes : undefined;
            resourceInputs["countryCodes"] = args ? args.countryCodes : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["ipPorts"] = args ? args.ipPorts : undefined;
            resourceInputs["marathonAppName"] = args ? args.marathonAppName : undefined;
            resourceInputs["marathonServicePort"] = args ? args.marathonServicePort : undefined;
            resourceInputs["markers"] = args ? args.markers : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["prefixes"] = args ? args.prefixes : undefined;
            resourceInputs["ranges"] = args ? args.ranges : undefined;
            resourceInputs["tenantRef"] = args ? args.tenantRef : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Ipaddrgroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Ipaddrgroup resources.
 */
export interface IpaddrgroupState {
    addrs?: pulumi.Input<pulumi.Input<inputs.IpaddrgroupAddr>[]>;
    configpbAttributes?: pulumi.Input<pulumi.Input<inputs.IpaddrgroupConfigpbAttribute>[]>;
    countryCodes?: pulumi.Input<pulumi.Input<string>[]>;
    description?: pulumi.Input<string>;
    ipPorts?: pulumi.Input<pulumi.Input<inputs.IpaddrgroupIpPort>[]>;
    marathonAppName?: pulumi.Input<string>;
    marathonServicePort?: pulumi.Input<string>;
    markers?: pulumi.Input<pulumi.Input<inputs.IpaddrgroupMarker>[]>;
    name?: pulumi.Input<string>;
    prefixes?: pulumi.Input<pulumi.Input<inputs.IpaddrgroupPrefix>[]>;
    ranges?: pulumi.Input<pulumi.Input<inputs.IpaddrgroupRange>[]>;
    tenantRef?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Ipaddrgroup resource.
 */
export interface IpaddrgroupArgs {
    addrs?: pulumi.Input<pulumi.Input<inputs.IpaddrgroupAddr>[]>;
    configpbAttributes?: pulumi.Input<pulumi.Input<inputs.IpaddrgroupConfigpbAttribute>[]>;
    countryCodes?: pulumi.Input<pulumi.Input<string>[]>;
    description?: pulumi.Input<string>;
    ipPorts?: pulumi.Input<pulumi.Input<inputs.IpaddrgroupIpPort>[]>;
    marathonAppName?: pulumi.Input<string>;
    marathonServicePort?: pulumi.Input<string>;
    markers?: pulumi.Input<pulumi.Input<inputs.IpaddrgroupMarker>[]>;
    name?: pulumi.Input<string>;
    prefixes?: pulumi.Input<pulumi.Input<inputs.IpaddrgroupPrefix>[]>;
    ranges?: pulumi.Input<pulumi.Input<inputs.IpaddrgroupRange>[]>;
    tenantRef?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
}
