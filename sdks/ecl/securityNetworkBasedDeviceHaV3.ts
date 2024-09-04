// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SecurityNetworkBasedDeviceHaV3 extends pulumi.CustomResource {
    /**
     * Get an existing SecurityNetworkBasedDeviceHaV3 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecurityNetworkBasedDeviceHaV3State, opts?: pulumi.CustomResourceOptions): SecurityNetworkBasedDeviceHaV3 {
        return new SecurityNetworkBasedDeviceHaV3(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ecl:index/securityNetworkBasedDeviceHaV3:SecurityNetworkBasedDeviceHaV3';

    /**
     * Returns true if the given object is an instance of SecurityNetworkBasedDeviceHaV3.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SecurityNetworkBasedDeviceHaV3 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SecurityNetworkBasedDeviceHaV3.__pulumiType;
    }

    public readonly haLink1!: pulumi.Output<outputs.SecurityNetworkBasedDeviceHaV3HaLink1>;
    public readonly haLink2!: pulumi.Output<outputs.SecurityNetworkBasedDeviceHaV3HaLink2>;
    public readonly host1AzGroup!: pulumi.Output<string>;
    public readonly host2AzGroup!: pulumi.Output<string>;
    public readonly licenseKind!: pulumi.Output<string>;
    public readonly locale!: pulumi.Output<string | undefined>;
    public readonly operatingMode!: pulumi.Output<string>;
    public readonly ports!: pulumi.Output<outputs.SecurityNetworkBasedDeviceHaV3Port[] | undefined>;
    public readonly tenantId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.SecurityNetworkBasedDeviceHaV3Timeouts | undefined>;

    /**
     * Create a SecurityNetworkBasedDeviceHaV3 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecurityNetworkBasedDeviceHaV3Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SecurityNetworkBasedDeviceHaV3Args | SecurityNetworkBasedDeviceHaV3State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SecurityNetworkBasedDeviceHaV3State | undefined;
            resourceInputs["haLink1"] = state ? state.haLink1 : undefined;
            resourceInputs["haLink2"] = state ? state.haLink2 : undefined;
            resourceInputs["host1AzGroup"] = state ? state.host1AzGroup : undefined;
            resourceInputs["host2AzGroup"] = state ? state.host2AzGroup : undefined;
            resourceInputs["licenseKind"] = state ? state.licenseKind : undefined;
            resourceInputs["locale"] = state ? state.locale : undefined;
            resourceInputs["operatingMode"] = state ? state.operatingMode : undefined;
            resourceInputs["ports"] = state ? state.ports : undefined;
            resourceInputs["tenantId"] = state ? state.tenantId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as SecurityNetworkBasedDeviceHaV3Args | undefined;
            if ((!args || args.haLink1 === undefined) && !opts.urn) {
                throw new Error("Missing required property 'haLink1'");
            }
            if ((!args || args.haLink2 === undefined) && !opts.urn) {
                throw new Error("Missing required property 'haLink2'");
            }
            if ((!args || args.host1AzGroup === undefined) && !opts.urn) {
                throw new Error("Missing required property 'host1AzGroup'");
            }
            if ((!args || args.host2AzGroup === undefined) && !opts.urn) {
                throw new Error("Missing required property 'host2AzGroup'");
            }
            if ((!args || args.licenseKind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'licenseKind'");
            }
            if ((!args || args.operatingMode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'operatingMode'");
            }
            if ((!args || args.tenantId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tenantId'");
            }
            resourceInputs["haLink1"] = args ? args.haLink1 : undefined;
            resourceInputs["haLink2"] = args ? args.haLink2 : undefined;
            resourceInputs["host1AzGroup"] = args ? args.host1AzGroup : undefined;
            resourceInputs["host2AzGroup"] = args ? args.host2AzGroup : undefined;
            resourceInputs["licenseKind"] = args ? args.licenseKind : undefined;
            resourceInputs["locale"] = args ? args.locale : undefined;
            resourceInputs["operatingMode"] = args ? args.operatingMode : undefined;
            resourceInputs["ports"] = args ? args.ports : undefined;
            resourceInputs["tenantId"] = args ? args.tenantId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SecurityNetworkBasedDeviceHaV3.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SecurityNetworkBasedDeviceHaV3 resources.
 */
export interface SecurityNetworkBasedDeviceHaV3State {
    haLink1?: pulumi.Input<inputs.SecurityNetworkBasedDeviceHaV3HaLink1>;
    haLink2?: pulumi.Input<inputs.SecurityNetworkBasedDeviceHaV3HaLink2>;
    host1AzGroup?: pulumi.Input<string>;
    host2AzGroup?: pulumi.Input<string>;
    licenseKind?: pulumi.Input<string>;
    locale?: pulumi.Input<string>;
    operatingMode?: pulumi.Input<string>;
    ports?: pulumi.Input<pulumi.Input<inputs.SecurityNetworkBasedDeviceHaV3Port>[]>;
    tenantId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SecurityNetworkBasedDeviceHaV3Timeouts>;
}

/**
 * The set of arguments for constructing a SecurityNetworkBasedDeviceHaV3 resource.
 */
export interface SecurityNetworkBasedDeviceHaV3Args {
    haLink1: pulumi.Input<inputs.SecurityNetworkBasedDeviceHaV3HaLink1>;
    haLink2: pulumi.Input<inputs.SecurityNetworkBasedDeviceHaV3HaLink2>;
    host1AzGroup: pulumi.Input<string>;
    host2AzGroup: pulumi.Input<string>;
    licenseKind: pulumi.Input<string>;
    locale?: pulumi.Input<string>;
    operatingMode: pulumi.Input<string>;
    ports?: pulumi.Input<pulumi.Input<inputs.SecurityNetworkBasedDeviceHaV3Port>[]>;
    tenantId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SecurityNetworkBasedDeviceHaV3Timeouts>;
}
