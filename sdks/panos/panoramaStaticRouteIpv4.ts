// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class PanoramaStaticRouteIpv4 extends pulumi.CustomResource {
    /**
     * Get an existing PanoramaStaticRouteIpv4 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PanoramaStaticRouteIpv4State, opts?: pulumi.CustomResourceOptions): PanoramaStaticRouteIpv4 {
        return new PanoramaStaticRouteIpv4(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'panos:index/panoramaStaticRouteIpv4:PanoramaStaticRouteIpv4';

    /**
     * Returns true if the given object is an instance of PanoramaStaticRouteIpv4.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PanoramaStaticRouteIpv4 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PanoramaStaticRouteIpv4.__pulumiType;
    }

    public readonly adminDistance!: pulumi.Output<number | undefined>;
    public readonly bfdProfile!: pulumi.Output<string | undefined>;
    public readonly destination!: pulumi.Output<string>;
    public readonly interface!: pulumi.Output<string | undefined>;
    public readonly metric!: pulumi.Output<number | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly nextHop!: pulumi.Output<string | undefined>;
    public readonly routeTable!: pulumi.Output<string | undefined>;
    public readonly template!: pulumi.Output<string | undefined>;
    public readonly templateStack!: pulumi.Output<string | undefined>;
    public readonly type!: pulumi.Output<string | undefined>;
    public readonly virtualRouter!: pulumi.Output<string>;

    /**
     * Create a PanoramaStaticRouteIpv4 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PanoramaStaticRouteIpv4Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PanoramaStaticRouteIpv4Args | PanoramaStaticRouteIpv4State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PanoramaStaticRouteIpv4State | undefined;
            resourceInputs["adminDistance"] = state ? state.adminDistance : undefined;
            resourceInputs["bfdProfile"] = state ? state.bfdProfile : undefined;
            resourceInputs["destination"] = state ? state.destination : undefined;
            resourceInputs["interface"] = state ? state.interface : undefined;
            resourceInputs["metric"] = state ? state.metric : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nextHop"] = state ? state.nextHop : undefined;
            resourceInputs["routeTable"] = state ? state.routeTable : undefined;
            resourceInputs["template"] = state ? state.template : undefined;
            resourceInputs["templateStack"] = state ? state.templateStack : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["virtualRouter"] = state ? state.virtualRouter : undefined;
        } else {
            const args = argsOrState as PanoramaStaticRouteIpv4Args | undefined;
            if ((!args || args.destination === undefined) && !opts.urn) {
                throw new Error("Missing required property 'destination'");
            }
            if ((!args || args.virtualRouter === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualRouter'");
            }
            resourceInputs["adminDistance"] = args ? args.adminDistance : undefined;
            resourceInputs["bfdProfile"] = args ? args.bfdProfile : undefined;
            resourceInputs["destination"] = args ? args.destination : undefined;
            resourceInputs["interface"] = args ? args.interface : undefined;
            resourceInputs["metric"] = args ? args.metric : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nextHop"] = args ? args.nextHop : undefined;
            resourceInputs["routeTable"] = args ? args.routeTable : undefined;
            resourceInputs["template"] = args ? args.template : undefined;
            resourceInputs["templateStack"] = args ? args.templateStack : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["virtualRouter"] = args ? args.virtualRouter : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PanoramaStaticRouteIpv4.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PanoramaStaticRouteIpv4 resources.
 */
export interface PanoramaStaticRouteIpv4State {
    adminDistance?: pulumi.Input<number>;
    bfdProfile?: pulumi.Input<string>;
    destination?: pulumi.Input<string>;
    interface?: pulumi.Input<string>;
    metric?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    nextHop?: pulumi.Input<string>;
    routeTable?: pulumi.Input<string>;
    template?: pulumi.Input<string>;
    templateStack?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    virtualRouter?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PanoramaStaticRouteIpv4 resource.
 */
export interface PanoramaStaticRouteIpv4Args {
    adminDistance?: pulumi.Input<number>;
    bfdProfile?: pulumi.Input<string>;
    destination: pulumi.Input<string>;
    interface?: pulumi.Input<string>;
    metric?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    nextHop?: pulumi.Input<string>;
    routeTable?: pulumi.Input<string>;
    template?: pulumi.Input<string>;
    templateStack?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    virtualRouter: pulumi.Input<string>;
}
