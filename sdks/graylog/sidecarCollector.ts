// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SidecarCollector extends pulumi.CustomResource {
    /**
     * Get an existing SidecarCollector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SidecarCollectorState, opts?: pulumi.CustomResourceOptions): SidecarCollector {
        return new SidecarCollector(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'graylog:index/sidecarCollector:SidecarCollector';

    /**
     * Returns true if the given object is an instance of SidecarCollector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SidecarCollector {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SidecarCollector.__pulumiType;
    }

    public readonly defaultTemplate!: pulumi.Output<string | undefined>;
    public readonly executablePath!: pulumi.Output<string>;
    public readonly executeParameters!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly nodeOperatingSystem!: pulumi.Output<string>;
    public readonly serviceType!: pulumi.Output<string>;
    public readonly validationParameters!: pulumi.Output<string | undefined>;

    /**
     * Create a SidecarCollector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SidecarCollectorArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SidecarCollectorArgs | SidecarCollectorState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SidecarCollectorState | undefined;
            resourceInputs["defaultTemplate"] = state ? state.defaultTemplate : undefined;
            resourceInputs["executablePath"] = state ? state.executablePath : undefined;
            resourceInputs["executeParameters"] = state ? state.executeParameters : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nodeOperatingSystem"] = state ? state.nodeOperatingSystem : undefined;
            resourceInputs["serviceType"] = state ? state.serviceType : undefined;
            resourceInputs["validationParameters"] = state ? state.validationParameters : undefined;
        } else {
            const args = argsOrState as SidecarCollectorArgs | undefined;
            if ((!args || args.executablePath === undefined) && !opts.urn) {
                throw new Error("Missing required property 'executablePath'");
            }
            if ((!args || args.nodeOperatingSystem === undefined) && !opts.urn) {
                throw new Error("Missing required property 'nodeOperatingSystem'");
            }
            if ((!args || args.serviceType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceType'");
            }
            resourceInputs["defaultTemplate"] = args ? args.defaultTemplate : undefined;
            resourceInputs["executablePath"] = args ? args.executablePath : undefined;
            resourceInputs["executeParameters"] = args ? args.executeParameters : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nodeOperatingSystem"] = args ? args.nodeOperatingSystem : undefined;
            resourceInputs["serviceType"] = args ? args.serviceType : undefined;
            resourceInputs["validationParameters"] = args ? args.validationParameters : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SidecarCollector.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SidecarCollector resources.
 */
export interface SidecarCollectorState {
    defaultTemplate?: pulumi.Input<string>;
    executablePath?: pulumi.Input<string>;
    executeParameters?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nodeOperatingSystem?: pulumi.Input<string>;
    serviceType?: pulumi.Input<string>;
    validationParameters?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SidecarCollector resource.
 */
export interface SidecarCollectorArgs {
    defaultTemplate?: pulumi.Input<string>;
    executablePath: pulumi.Input<string>;
    executeParameters?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nodeOperatingSystem: pulumi.Input<string>;
    serviceType: pulumi.Input<string>;
    validationParameters?: pulumi.Input<string>;
}
